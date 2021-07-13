---
title: 5、富文本编辑器
order: 5
---
[文档](https://www.yuque.com/braft-editor/be/lzwpnr)  

##### 相关接口
+ 文本转对象:editorState = BraftEditor.createEditorState(htmlContent)
+ 对象转文本:htmlContent = editorState.toHTML()

```jsx
import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

class EditorDemo extends React.Component {

    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null)
    }

    async componentDidMount () {
        // 假设此处从服务端获取html格式的编辑器内容
        //const htmlContent = await fetchEditorContent()
        const htmlContent = `<ul><li><span style="font-size:20px"><span style="color:#f32784">asdfdsf. asdf</span></span>😍</li><li>sdf</li></ul>`
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        this.setState({
            editorState: BraftEditor.createEditorState(htmlContent)
        })
    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        console.log('保存内容为：',htmlContent)
        //const result = await saveEditorContent(htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    render () {
        const { editorState } = this.state
        return (
            <div className="my-component">
              <h3>1、编辑</h3>
              <div style={{border:'1px solid #999'}}>
                <BraftEditor
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
              </div>
              <h3>2、展示</h3>
              <div dangerouslySetInnerHTML={{ __html:  editorState.toHTML() }} />
            </div>
        )
    }
}

ReactDOM.render((
  <EditorDemo />
), mountNode);
```
 
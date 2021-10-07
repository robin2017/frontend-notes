---
title: 17、路由联动
order: 17
---
### 路由和tab/step的联动


 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Tab,Step } from '@alifd/next'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
const App =() => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">路由联动</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

const pageMap = [
    {label:'页面1',value:'page1'},
    {label:'页面2',value:'page2'}
]

function Topics() {
  let match = useRouteMatch();
  const history = useHistory();
  // 类似于重定向
  if(match.isExact){
      history.push('/topics/page1')
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
      {
        pageMap.map(item=>{
            return (
                <li>
                    <Link to={`${match.url}/${item.value}`}>{item.label}</Link>
                </li>
            )
          })
      }
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

 

function Topic() {
  // 1、路由控制页面
  let { topicId } = useParams();
  const history = useHistory()
    console.log('topic-render:',topicId,pageMap)


    const steps = pageMap.map((item, index) => (
  <Step.Item
    key={index}
    title={item.label}
    content={item.label}
  />
));
  return <div style={{height:'400px',width:'100%',border:'1px solid #333',borderRadis:'6px'}}>
    <div>组件内操作:{topicId}</div>
    <div style={{margin:'20px',border:'1px solid red'}}>
       <Tab activeKey={topicId} onChange={(val)=>{
          console.log('change:',val)
          // 2、页面控制路由
          history.push(`/topics/${val}`)
      }}>
      {
          pageMap.map(item=>{
              return <Tab.Item title={item.label} key={item.value}>
                    {item.label}
                    </Tab.Item>
          })
      }
  </Tab>
  </div>
  <div style={{margin:'20px' ,border:'1px solid red'}}>
      <Step current={pageMap.indexOf(pageMap.find(item=>item.value===topicId))} stretch  shape="circle">
      {steps}
    </Step>
    </div>
  </div>
}

ReactDOM.render((
  <App />
), mountNode);
```
 

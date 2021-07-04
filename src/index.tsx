import * as React from 'react';

type ComponentProps = {
  title: string,
};

export default function FrontendNotes(props: ComponentProps) {
  const { type, ...others } = props;

  return (
    <div className="FrontendNotes" {...others}>Hello FrontendNotes</div>
  );
}

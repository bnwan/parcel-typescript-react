import * as React from "react";

interface INameProps {
  name: string;
  onSave(name: string): void;
}

const resetValue = "";

export const Name: React.SFC<INameProps> = ({ onSave, name }) => (
  <div>
    <input type="text" value={name} onChange={e => onSave(e.target.value)} />
    <button onClick={e => onSave(resetValue)}>reset</button>
    Hello {name}
  </div>
);

import * as React from "react";
import { Name } from "./name";

interface IAppState {
  name: string;
}

export class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: ""
    };
  }

  render() {
    const { name } = this.state;
    return (
      <Name
        name={name}
        onSave={value =>
          this.setState({
            name: value
          })
        }
      />
    );
  }
}

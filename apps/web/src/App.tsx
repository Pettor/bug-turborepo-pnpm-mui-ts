import { ReactElement } from "react";
import { BoxElement, DivElement } from "ui"; 

export default function App(): ReactElement {
  return (
    <div>
      <BoxElement sx={{ background: "green" }}>
        <DivElement style={{ background: "blue" }}>
          <h1>asd</h1>
        </DivElement>
        asd
      </BoxElement>
    </div>
  );
}

import { render } from "@testing-library/react";
import { App } from "@/App";

it("アプリが描画されること", async () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});

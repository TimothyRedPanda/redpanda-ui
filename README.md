Visit [Red Panda Studio](https://red-panda.studio/redpandaui) for visual examples.

## Getting Started

1) Install Red Panda UI into your React project.

```bash
npm i ui-redpanda
```
2) Import your desired component and the styles.

```typescript
import { Button /* Or the component of your choice */ } from 'ui-redpanda';
import "ui-redpanda/dist/style.css";
```

3) Use the component.

```typescript
import { Button } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

const App = () => {
  return (
    <div>
      <Button>Default</Button>
    </div>
  );
};

export default App;
```

### GitHub

1) Clone the project down.

```bash
git clone https://github.com/TimothyRedPanda/redpanda-ui.git
```
2) Move into the correct directory.

```bash
cd ./redpanda-ui
```
3) Install the dependencies and build the project.

```bash
npm install
```
4) Run Storybook to view full UI components documentation.

```bash
npm run storybook
```

### Components

## Button

### Props

The Button component accepts the following props:

* `children` (ReactNode): The content to be displayed inside the button.

* `onClick?` (function): The function to be called when the button is clicked.

* `variant?` (string): The variant of the button.

    * `No variant prop` (default styles will be applied)
    * `"contained"`
    * `"outlined"`
    * `"disabled"`

* `size` (string): Size of the button.

    * `"small"`
    * `"base"` (If no size prop is given `"base"` will be the default)
    * `"large"`
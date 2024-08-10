# Red Panda UI

Visit [Red Panda Studio](https://red-panda.studio/redpandaui) for visual examples.

## Getting Started

1) Install Red Panda UI into your React project.

```bash
npm i ui-redpanda
```
2) Import your desired component and the styles.

```typescript
import { /* Component Name Here */ } from 'ui-redpanda';
import "ui-redpanda/dist/style.css";
```

3) Use the component.


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

```typescript
import { Button } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

const App = () => {
  return (
    <div>
      <Button onClick={() => alert("Button clicked!")}>Default</Button>
    </div>
  );
};

export default App;
```

### Props

The Button component accepts the following props:

* `children` (ReactNode): The content to be displayed inside the button.
* `onClick?` (function): The function to be called when the button is clicked.
* `className?` (string): The class name to apply different styles to the button. Include one of the following in your class name to change styles:
    * `""` (default)
    * `"contained"`
    * `"outlined"`
    * `"disabled"`


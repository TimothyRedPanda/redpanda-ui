Visit [Red Panda Studio](https://red-panda.studio/redpandaui) for visual examples.

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

# Getting Started

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
import { Button, Switch } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

const App = () => {
  return (
    <div>
      <Button>Default</Button>
      <Switch />
    </div>
  );
};

export default App;
```

### Components

Each component has a `className` prop if you wish to add your own class. Just to allow you to reference it in `CSS` if you wish. Remember though any styles you apply in `CSS` will have to have the `!important` tag.

```css

.yourClass {
  /* !important is needed to override the default styles. */
  background-color: #fff !important;
}

```

## Button

### Props

The Button component accepts the following props:

* `children` (ReactNode, required): The content to be displayed inside the button.

* `onClick` (function, optional): The function to be called when the button is clicked.

* `variant` (string, optional): The style variant, can be `contained`, `outlined` or `disabled`.

* `size` (string, optional): Size of the button, can be `small`, `base`(default size) or `large`.


## Switch

### Props

The Switch component accepts the following props:

* `onClick` (function, optional): The function to be called when the switch is toggled.

* `variant` (string, optional): The style variant, can be `live` or `disabled`.

## Label

### Props

The Label component accepts the following props:

* `label` (string, required): The actual text the label says.

* `size` (string, optional): Text size, can be `small`, `base`(default size) or `large`.

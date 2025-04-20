import { Checkbox, LinearLayout } from "innerscope";
import {
  Button,
  Input,
  Navigation,
  Select,
  Textarea,
} from "../../src/innerscope-base-ui";
import { app } from "..";

export function HomePage() {
  const page = LinearLayout(app.root);
  page.LayoutDirection = "TOP_TO_BOTTOM";
  page.ElementAlignment = "CENTER";
  page.ParentFill = "FILLXY";

  Navigation(page);
  Button("Hello World", page);
  Input("Enter your name", page);
  Checkbox("Remember me", page);
  Select(page);
  Textarea(page);
  //Select("Select an option", ["Option 1", "Option 2", "Option 3"], page);
}

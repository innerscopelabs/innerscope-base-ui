import { LinearLayout } from "innerscope";
import { Button } from "../../src/innerscope-base-ui";
import { app } from "..";

export function HomePage(){
    const page = LinearLayout(app.root)
    page.LayoutDirection = 'TOP_TO_BOTTOM';
    page.ElementAlignment = 'CENTER'
    page.ParentFill = 'FILLXY'
    

    Button('Hello World', page)
}
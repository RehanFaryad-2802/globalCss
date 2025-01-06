## Global CSS
Global CSS refers to styles that are applied universally across an entire website or application, ensuring consistency and uniformity. These styles are typically declared in a central stylesheet and affect all elements unless overridden by more specific styles.

## Margin Classes
Explanation: Margin classes control the space outside the element's border. For example, `.mt20` adds 20px of space above an element, while `.mr10` adds 10px of space to the right.

Following are the selectors to insert margin in pixels.

- `.mt5`, `.mt10`, `.mt15`, `.mt20`, `.mt30`
- `.mr5`, `.mr10`, `.mr15`, `.mr20`, `.mr30`
- `.mb5`, `.mb10`, `.mb15`, `.mb20`, `.mb30`
- `.ml5`, `.ml10`, `.ml15`, `.ml20`, `.ml30`
- `.m5`, `.m10`, `.m15`, `.m20`, `.m30`

Following are the selectors to insert margin in rem.

- `.mt1r`, `.mt2r`, `.mt3r`, `.mt5r`, `.mt10r`, `.mt30`
- `.mr1r`, `.mr2r`, `.mr3r`, `.mr5r`, `.mr10r`, `.mr30`
- `.mb1r`, `.mb2r`, `.mb3r`, `.mb5r`, `.mb10r`, `.mb30`
- `.ml1r`, `.ml2r`, `.ml3r`, `.ml5r`, `.ml10r`, `.ml30`
- `.m5r`, `.m10r`, `.m3r`, `.m5r`, `.m10r`, `.m30r`

## Padding Classes
Explanation: Padding classes control the space inside the element's border. For example, `.pt15` adds 15px of space inside the element at the top, while `.pl20` adds 20px of space inside the left side.

Following are the selectors to insert padding in pixels.

- `.pt5`, `.pt10`, `.pt15`, `.pt20`, `.pt30`
- `.pr5`, `.pr10`, `.pr15`, `.pr20`, `.pr30`
- `.pb5`, `.pb10`, `.pb15`, `.pb20`, `.pb30`
- `.pl5`, `.pl10`, `.pl15`, `.pl20`, `.pl30`
- `.p5`, `.p10`, `.p15`, `.p20`, `.p30`

Following are the selectors to insert padding in rem.

- `.pt1r`, `.pt2r`, `.pt3r`, `.pt5r`, `.pt10r`, `.pt30`
- `.pr1r`, `.pr2r`, `.pr3r`, `.pr5r`, `.pr10r`, `.pr30`
- `.pb1r`, `.pb2r`, `.pb3r`, `.pb5r`, `.pb10r`, `.pb30`
- `.pl1r`, `.pl2r`, `.pl3r`, `.pl5r`, `.pl10r`, `.pl30`
- `.p5r`, `.p10r`, `.p3r`, `.p5r`, `.p10r`, `.p30r`

## Border Radius Classes
Explanation: Border radius classes round the corners of an element. For example, `.br10` adds a border radius of 10px to all corners, creating a slightly rounded effect.

- `.br1`, `.br2`, `.br3`, `.br4`, `.br5`, `.br6`, `.br7`, `.br8`, `.br9`, `.br10`, `.br15`, `.br20`, `.br25`
- `.brt1`, `.brt2`, `.brt3`, `.brt4`, `.brt5`, `.brt6`, `.brt7`, `.brt8`, `.brt9`, `.brt10`, `.brt15`, `.brt20`, `.brt25`
- `.brb1`, `.brb2`, `.brb3`, `.brb4`, `.brb5`, `.brb6`, `.brb7`, `.brb8`, `.brb9`, `.brb10`, `.brb15`, `.brb20`, `.brb25`
- `.brl1`, `.brl2`, `.brl3`, `.brl4`, `.brl5`, `.brl6`, `.brl7`, `.brl8`, `.brl9`, `.brl10`, `.brl15`, `.brl20`, `.brl25`
- `.brr1`, `.brr2`, `.brr3`, `.brr4`, `.brr5`, `.brr6`, `.brr7`, `.brr8`, `.brr9`, `.brr10`, `.brr15`, `.brr20`, `.brr25`
- `.br10r`, `.brt10r`, `.brb10r`, `.brl10r`, `.brr10r`
- `.br100p`, `.brt100p`, `.brb100p`, `.brl100p`, `.brr100p`
- `.brtl1`, `.brtl2`, `.brtl3`, `.brtl4`, `.brtl5`, `.brtl6`, `.brtl7`, `.brtl8`, `.brtl9`, `.brtl10`, `.brtl15`, `.brtl20`, `.brtl25`
- `.brtr1`, `.brtr2`, `.brtr3`, `.brtr4`, `.brtr5`, `.brtr6`, `.brtr7`, `.brtr8`, `.brtr9`, `.brtr10`, `.brtr15`, `.brtr20`, `.brtr25`
- `.brbl1`, `.brbl2`, `.brbl3`, `.brbl4`, `.brbl5`, `.brbl6`, `.brbl7`, `.brbl8`, `.brbl9`, `.brbl10`, `.brbl15`, `.brbl20`, `.brbl25`
- `.brbr1`, `.brbr2`, `.brbr3`, `.brbr4`, `.brbr5`, `.brbr6`, `.brbr7`, `.brbr8`, `.brbr9`, `.brbr10`, `.brbr15`, `.brbr20`, `.brbr25`
- `.brtl10r`, `.brtr10r`, `.brbl10r`, `.brbr10r`
- `.brtl100p`, `.brtr100p`, `.brbl100p`, `.brbr100p`

## Spacer Classes
Explanation: Spacer classes are used to add vertical spacing between elements. For example, `.spacer3` creates a 3rem padding gap.

- `.spacer1`, `.spacer2`, `.spacer3`, `.spacer4`, `.spacer5`

## Flex System
- `.f` Defines a flex container with the `display: flex;` property and enables wrapping of flex items with `flex-wrap: wrap;`.
- `.nowrap` Forces the flex container to have no wrapping of items using `flex-wrap: nowrap !important;`.
- `.f0` Sets the flex property to `flex: 1 0 0;`, meaning the item can grow to fill available space but has no initial size (`flex-grow: 1, flex-shrink: 0, flex-basis: 0`).
- `.f1 - f10` Applies a custom flex value to the item by dividing into total 10 parts. `.f1` means 1/10 and `.f10` means 10/10 (complete area).
- `.fdc` Changes the flex direction to column using `flex-direction: column;`.
- `.aic` Aligns the flex items in the center along the cross axis using `align-items: center;`.
- `.jcc` Centers the flex items along the main axis with `justify-content: center;`.
- `.jce` Aligns the flex items to the end of the main axis using `justify-content: end;`.
- `.jcsb` Distributes space between flex items with `justify-content: space-between;`.
- `.jcse` Distributes space evenly between flex items with `justify-content: space-evenly;`.
- `.fcsa` Distributes space around flex items with `justify-content: space-around;`.
- `.flex` Has the properties of `display: flex;`, `justify-content: center;`, and `align-items: center;`.

## Heading, Text (Paragraphs) & Colors
- `.pointer` This class stands for applying a pointer cursor to interactive elements (e.g., links, buttons). It changes the mouse cursor to a hand when hovering over an element with this class (`cursor: pointer;` is used for this effect).
- `img[src]` This selector stands for targeting all `<img>` elements that have a `src` attribute. `width: 100%;` sets the image width to 100% of its parent container.
- `img[src].auto` This selector stands for targeting images that have the `src` attribute and the `auto` class. `width: auto;` ensures that the image's natural width is preserved.
- `h1, h2, h3, p` This selector stands for applying padding of 10px to `<h1>`, `<h2>`, `<h3>`, and `<p>` elements.
- `.main-heading, .sub-heading` applies `font-size: 2.5rem` and `font-size: 2rem` for main and subheadings respectively.
- `.title-text` provides a clean and neat font size of `font-size: 1.5rem`.

## Color Classes
- `.black`, `.red`, `.green`, `.blue`, `.yellow`, `.cyan`, `.pink`, `.purple`, `.brown`, `.gray` classes represent colors in their respective color names.
- `.bg-black`, `.bg-red`, `.bg-green`, `.bg-blue`, `.bg-yellow`, `.bg-cyan`, `.bg-pink`, `.bg-purple`, `.bg-brown`, `.bg-gray` classes represent respective background colors.

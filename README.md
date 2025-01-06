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

- **`.pointer`**  
  This class stands for applying a pointer cursor to interactive elements (e.g., links, buttons). It changes the mouse cursor to a hand when hovering over an element with this class. `cursor: pointer;` is used for this effect.

- **`img[src]`**  
  This selector stands for targeting all `<img>` elements that have a `src` attribute. `width: 100%;` sets the image width to 100% of its parent container.

- **`img[src].auto`**  
  This selector stands for targeting images that have the `src` attribute and the `auto` class. `width: auto;` ensures that the image's natural width is preserved.

- **`h1, h2, h3, p`**  
  This selector stands for applying padding of 10px to `<h1>`, `<h2>`, `<h3>`, and `<p>` elements.

- **`.main-heading`**  
  This class stands for the main heading of the page. It applies specific styles such as text color (`var(--mhc)`), font size (`var(--mh)`), bold weight (`800`), center alignment (`text-align: center;`), and margin.

- **`.heading`**  
  This class stands for subheadings under the main heading. It applies a specific text color (`var(--hc)`), font size (`2.3rem`), and font weight (`800`).

- **`.sub-heading`**  
  This class stands for secondary headings and applies a distinct text color (`var(--shc)`), font size (`var(--sh)`), and font weight (`700`).

- **`.mbgc`**  
  This class stands for applying a background color to an element using the value defined in `var(--mbgc)`.

- **`.mtc`**  
  This class stands for changing the text color to `var(--mtc)`.

- **`.mhc`**  
  This class stands for applying the color for main headings, defined as `var(--mhc)`.

- **`.shc`**  
  This class stands for applying the color for subheadings, defined as `var(--shc)`.

- **`.wtc`**  
  This class stands for setting the text color to white (`#fff`).

- **`.btc`**  
  This class stands for setting the text color to black (`#000`).

- **`.tc`**  
  This class stands for setting the text color to `var(--tc)`.

- **`.stc`**  
  This class stands for applying a secondary text color defined as `var(--stc)`.

- **`.hc`**  
  This class stands for applying the color for headings, defined as `var(--hc)`.

- **`h2`**  
  This selector stands for setting the font size of `<h2>` elements to `2.3rem`.

- **`.mh`**  
  This class stands for defining the font size for main headings as `var(--mh)`.

- **`.sh`**  
  This class stands for defining the font size for subheadings as `var(--sh)`.

- **`.mt`**  
  This class stands for defining the font size for main text as `var(--mt)`.

- **`.st`**  
  This class stands for defining the font size for secondary text as `var(--st)`.

- **`.hide`**  
  This class stands for hiding elements from the page. `display: none;` ensures the element does not appear or take up space in the layout.

- **`.tac`**  
  This class stands for aligning text to the center of its container.

- **`.m0a`**  
  This class stands for centering an element horizontally by setting its margin to `0 auto`.

- **`.tae`**  
  This class stands for aligning text to the end of the container. For left-to-right text, this means right-alignment; for right-to-left text, it means left-alignment.

- **`.tas`**  
  This class stands for aligning text to the start of the container. For left-to-right text, this means left-alignment; for right-to-left text, it means right-alignment.




### Default Values

- `--mbgc` (main background color): `#00000b`
- `--mtc` (main text color): `#a307e6`
- `--tc` (text color): `#08b917`
- `--stc` (sub text color): `#414303`
- `--mhc` (main heading color): `#000211`
- `--hc` (heading color): `#000211`
- `--shc` (sub heading color): `#000211`
- `--mh` (main heading): `3.4rem`
- `--sh` (sub heading): `1.5rem`
- `--mt` (main text): `1.3rem`
- `--st` (sub text): `0.75rem`
- `--font-family`: `"Segoe UI"`
- `--f1`: `0 0 10%`
- `--f2`: `0 0 20%`
- `--f3`: `0 0 30%`
- `--f4`: `0 0 40%`
- `--f5`: `0 0 50%`
- `--f6`: `0 0 60%`
- `--f7`: `0 0 70%`
- `--f8`: `0 0 80%`
- `--f9`: `0 0 90%`
- `--f10`: `0 0 100%`


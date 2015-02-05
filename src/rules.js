/**
 * ============================================================================
 * SOT: https://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn
 *      http://docs.emmet.io/cheat-sheet/
 * ============================================================================
 *
 *  NOTES:
 *
 *  Depending on the selector you use to namespace these rules (id versus class), their style weight will be either 0,1,0,0 or 0,0,1,0. We suggest using an id for the extra specificity.
 *  - look for top/right/bottom/left rules in the "offset" section
 *  - we do *not* use left and right as keywords for class names, instead we use "start" and "end"
 *  - T-Shirt sizes follow http://www.americanapparel.net/sizing/default.asp?chart=mu.shirts
 *
 **/

module.exports = [
    /**
     ==================================================================
     BORDERS
     ==================================================================
     */
    // all edges
    {
        type: 'pattern',
        id: 'border',
        name: 'Border',
        prefix: '.Bd-',
        allowCustom: true,
        allowCustomAutoSuffix: true,
        properties: ['border']
    },
    // top
    {
        type: 'pattern',
        id: 'border-top',
        name: 'Border top',
        prefix: '.Bdt-',
        allowCustom: true,
        allowCustomAutoSuffix: true,
        properties: ['border-top']
    },
    // end
    {
        type: 'pattern',
        id: 'border-end',
        name: 'Border end',
        prefix: '.Bdend-',
        allowCustom: true,
        allowCustomAutoSuffix: true,
        properties: ['border-$END']
    },
    // bottom
    {
        type: 'pattern',
        id: 'border-bottom',
        name: 'Border bottom',
        prefix: '.Bdb-',
        allowCustom: true,
        allowCustomAutoSuffix: true,
        properties: ['border-bottom']
    },
    // start
    {
        type: 'pattern',
        id: 'border-start',
        name: 'Border start',
        prefix: '.Bdstart-',
        allowCustom: true,
        allowCustomAutoSuffix: true,
        properties: ['border-$START']
    },
    // X axis
    {
        type: 'pattern',
        id: 'border-x',
        name: 'Border X',
        prefix: '.Bdx-',
        allowCustom: true,
        allowCustomAutoSuffix: true,
        properties: ['border-$START', 'border-$END']
    },
    // Y axis
    {
        type: 'pattern',
        id: 'border-y',
        name: 'Border Y',
        prefix: '.Bdy-',
        allowCustom: true,
        allowCustomAutoSuffix: true,
        properties: ['border-top', 'border-bottom']
    },
    /**
     ==================================================================
     BORDER RADIUS
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'border-radius',
        name: 'Border radius',
        prefix: '.Bdrs-',
        properties: ['border-radius'],
        allowCustom: true
    },
    /**
     ==================================================================
     FONT FAMILY suffix matches generic font-family
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'font-family',
        name: 'Font family',
        prefix: '.Ff-',
        properties: ['font-family'],
        rules: [
            {suffix: 'c', values: ['"Monotype Corsiva", "Comic Sans MS", cursive']},
            {suffix: 'f', values: ['Capitals, Impact, fantasy']},
            {suffix: 'm', values: ['Monaco, "Courier New", monospace']},
            {suffix: 's', values: ['Georgia, "Times New Roman", serif']},
            {suffix: 'ss', values: ['Helvetica, Arial, sans-serif']}
        ]
    },

     /**
     ==================================================================
     BACKGROUNDS
     ==================================================================
     */

    /* background */
    {
        type: 'pattern',
        id: 'background',
        name: 'Background',
        prefix: '.Bg-',
        properties: ['background'],
        allowCustom: true,
        allowCustomAutoSuffix: true,
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 't', values: ['transparent']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /* background-image */
    {
        type: 'pattern',
        id: 'background-image',
        name: 'Background image',
        prefix: '.Bgi-',
        properties: ['background-image'],
        allowCustom: true,
        allowCustomAutoSuffix: true,
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /* background-color */
    {
        type: 'pattern',
        id: 'background-color',
        name: 'Background color',
        prefix: '.Bgc-',
        properties: ['background-color'],
        allowCustom: true,
        allowCustomAutoSuffix: true
    },

    /* background-clip */
    {
        type: 'pattern',
        id: 'background-clip',
        name: 'Background clip',
        prefix: '.Bgcp-',
        properties: ['background-clip'],
        rules: [
            {suffix: 'bb', values: ['border-box']},
            {suffix: 'cb', values: ['content-box']},
            {suffix: 'pb', values: ['padding-box']}
        ]
    },
    /* background-origin */
    {
        type: 'pattern',
        id: 'background-origin',
        name: 'Background origin',
        prefix: '.Bgo-',
        properties: ['background-origin'],
        rules: [
            {suffix: 'bb', values: ['border-box']},
            {suffix: 'cb', values: ['content-box']},
            {suffix: 'pb', values: ['padding-box']}
        ]
    },
    /* background-size (length would be customized) */
    {
        type: 'pattern',
        id: 'background-size',
        name: 'Background size',
        prefix: '.Bgz-',
        properties: ['background-size'],
        allowCustom: true,
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'ct', values: ['contain']},
            {suffix: 'cv', values: ['cover']}
        ]
    },
    /* background-attachment */
    {
        type: 'pattern',
        id: 'background-attachment',
        name: 'Background attachment',
        prefix: '.Bga-',
        properties: ['background-attachment'],
        rules: [
            {suffix: 'f', values: ['fixed']},
            {suffix: 'l', values: ['local']},
            {suffix: 's', values: ['scroll']}
        ]
    },
    /* background-position *4 corners only* (s=start and e=end) */
    {
        type: 'pattern',
        id: 'background-position',
        name: 'Background position',
        prefix: '.Bgp-',
        properties: ['background-position'],
        rules: [
            {suffix: 'ts', values: ['$START 0']},
            {suffix: 'te', values: ['$END 0']},
            {suffix: 'bs', values: ['$START 100%']},
            {suffix: 'be', values: ['$END 100%']}
        ]
    },
    /* background-repeat */
    {
        type: 'pattern',
        id: 'background-repeat',
        name: 'Background repeat',
        prefix: '.Bgr-',
        properties: ['background-repeat'],
        rules: [
            {suffix: 'n', values: ['no-repeat']},
            {suffix: 'x', values: ['repeat-x']},
            {suffix: 'y', values: ['repeat-y']},
            {suffix: 'r', values: ['repeat']},
            {suffix: 's', values: ['space']},
            {suffix: 'ro', values: ['round']}
        ]
    },
    /**
     ==================================================================
     BORDER-COLLAPSE
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'border-collapse',
        name: 'Border collapse',
        prefix: '.Bdcl-',
        properties: ['border-collapse'],
        rules: [
            {suffix: 'c', values: ['collapse']},
            {suffix: 's', values: ['separate']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },

    /**
     ==================================================================
     BOX-SIZING
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'box-sizing',
        name: 'Box sizing',
        prefix: '.Bxz-',
        properties: ['box-sizing'],
        rules: [
            {suffix: 'cb', values: ['content-box']},
            {suffix: 'pb', values: ['padding-box']},
            {suffix: 'bb', values: ['border-box']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },

    /**
     ==================================================================
     BOX-SHADOW
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'box-shadow',
        name: 'Box shadow',
        properties: ['box-shadow'],
        prefix: '.Bxsh-',
        allowCustom: true,
        allowCustomAutoSuffix: true,
        rules: [
            {suffix: 'n', values: ['none']}
        ]
    },

    /**
     ==================================================================
     CLEAR
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'clear',
        name: 'Clear',
        prefix: '.Cl-',
        properties: ['clear'],
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 'b', values: ['both']},
            {suffix: 'start', values: ['$START']},
            {suffix: 'end', values: ['$END']},
            {suffix: 'inh', values: ['inherit']},
        ]
    },

    /**
     ==================================================================
     CURSOR
     TODO: how to deal with URIs? (allowCustom?)
     ==================================================================
     */
     {
        type: 'pattern',
        id: 'cursor',
        name: 'Cursor',
        prefix: '.Cur-',
        properties: ['cursor'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'c', values: ['crosshair']},
            {suffix: 'd', values: ['default']},
            {suffix: 'p', values: ['pointer']},
            {suffix: 'm', values: ['move']},
            {suffix: 'er', values: ['e-resize']},
            {suffix: 'ner', values: ['ne-resize']},
            {suffix: 'nwr', values: ['nw-resize']},
            {suffix: 'nr', values: ['n-resize']},
            {suffix: 'ser', values: ['se-resize']},
            {suffix: 'swr', values: ['sw-resize']},
            {suffix: 'sr', values: ['s-resize']},
            {suffix: 'wr', values: ['w-resize']},
            {suffix: 't', values: ['text']},
            {suffix: 'w', values: ['wait']},
            {suffix: 'h', values: ['help']},
            {suffix: 'pr', values: ['progress']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },

    /**
     ==================================================================
     DISPLAY
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'display',
        name: 'Display',
        prefix: '.D-',
        properties: ['display'],
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 'b', values: ['block']},
            {suffix: 'f', values: ['flex']},
            {suffix: 'i', values: ['inline']},
            {suffix: 'ib', values: ['inline-block']},
            {suffix: 'inh', values: ['inherit']},
            {suffix: 'tb', values: ['table']},
            {suffix: 'tbr', values: ['table-row']},
            {suffix: 'tbc', values: ['table-cell']},
            {suffix: 'li', values: ['list-item']},
            {suffix: 'ri', values: ['run-in']},
            {suffix: 'cp', values: ['compact']},
            {suffix: 'itb', values: ['inline-table']},
            {suffix: 'tbcl', values: ['table-column']},
            {suffix: 'tbclg', values: ['table-column-group']},
            {suffix: 'tbhg', values: ['table-header-group']},
            {suffix: 'tbfg', values: ['table-footer-group']},
            {suffix: 'tbrg', values: ['table-row-group']}
        ]
    },

    /**
     ==================================================================
     FLEX
     ==================================================================
     */
     /* FLEX
     * width values (i.e. 350px) cannot really be set here (as a generic value)
     */
    {
        type: 'pattern',
        id: 'flex',
        name: 'Flex',
        prefix: '.Flx-',
        properties: ['flex'],
        allowCustom: true,
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'n', values: ['none']}
        ]
    },

    /* FLEX-ALIGN */
    //
    // TODO: Seems like 'flex-align' is not a valid property anymore, it was replaced by 'align-self'.
    // Previous version: http://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align
    //   Latest version: http://www.w3.org/TR/css3-flexbox/#align-items-property
    //
    // {
    //     type: 'pattern',
    //     id: 'flex-align',
    //     name: 'Flex align',
    //     prefix: '.Fla-',
    //     properties: ['flex-align'],
    //     rules: [
    //         {suffix: 's', values: ['start']},
    //         {suffix: 'e', values: ['end']},
    //         {suffix: 'c', values: ['center']},
    //         {suffix: 'b', values: ['baseline']},
    //         {suffix: 'st', values: ['stretch']}
    //     ]
    // },
    {
        type: 'pattern',
        id: 'align-self',
        name: 'Align self',
        prefix: '.As-',
        properties: ['align-self'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'fs', values: ['flex-start']},
            {suffix: 'fe', values: ['flex-end']},
            {suffix: 'c', values: ['center']},
            {suffix: 'b', values: ['baseline']},
            {suffix: 'st', values: ['stretch']}
        ]
    },

    /* FLEX-DIRECTION  */
    {
        type: 'pattern',
        id: 'flex-direction',
        name: 'Flex direction',
        prefix: '.Fld-',
        properties: ['flex-direction'],
        rules: [
            {suffix: 'r', values: ['row']},
            {suffix: 'rr', values: ['row-reverse']},
            {suffix: 'c', values: ['column']},
            {suffix: 'cr', values: ['column-reverse']}
        ]
    },

    /* FLEX-FLOW  */
    {
        type: 'pattern',
        id: 'flex-flow',
        name: 'Flex flow',
        prefix: '.Flf-',
        properties: ['flex-flow'],
        rules: [
            {suffix: 'r', values: ['row']},
            {suffix: 'rr', values: ['row-reverse']},
            {suffix: 'c', values: ['column']},
            {suffix: 'cr', values: ['column-reverse']},
            {suffix: 'nw', values: ['nowrap']},
            {suffix: 'w', values: ['wrap']},
            {suffix: 'wr', values: ['wrap-reverse']},
        ]
    },

    /* FLEX-ITEM-ALIGN */
    //
    // TODO: 'flex-align' has been replaced by 'align-items'.
    // Previous version: http://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align
    //   Latest version: http://www.w3.org/TR/css3-flexbox/#align-items-property
    //
    // {
    //     type: 'pattern',
    //     id: 'flex-item-align',
    //     name: 'Flex item align',
    //     prefix: '.Flia-',
    //     properties: ['flex-item-align'],
    //     rules: [
    //         {suffix: 'a', values: ['auto']},
    //         {suffix: 's', values: ['start']},
    //         {suffix: 'e', values: ['end']},
    //         {suffix: 'c', values: ['center']},
    //         {suffix: 'b', values: ['baseline']},
    //         {suffix: 'st', values: ['stretch']},
    //     ]
    // },
    {
        type: 'pattern',
        id: 'align-items',
        name: 'Align items',
        prefix: '.Ai-',
        properties: ['align-items'],
        rules: [
            // flex-start | flex-end | center | baseline | stretch
            {suffix: 'fs', values: ['flex-start']},
            {suffix: 'fe', values: ['flex-end']},
            {suffix: 'c', values: ['center']},
            {suffix: 'b', values: ['baseline']},
            {suffix: 'st', values: ['stretch']}
        ]
    },

    /* FLEX-LINE-PACK */
    //
    // TODO: 'flex-line-pack' has been replaced by 'align-content'.
    //          Source: http://msdn.microsoft.com/en-us/library/ie/jj127302%28v=vs.85%29.aspx
    // Previous version: http://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-line-pack
    //   Latest version: http://www.w3.org/TR/css3-flexbox/#align-content-property
    //
    // {
    //     type: 'pattern',
    //     id: 'flex-line-pack',
    //     name: 'Flex line pack',
    //     prefix: '.Fllp-',
    //     properties: ['flex-line-pack'],
    //     rules: [
    //         {suffix: 's', values: ['start']},
    //         {suffix: 'e', values: ['end']},
    //         {suffix: 'c', values: ['center']},
    //         {suffix: 'j', values: ['justify']},
    //         {suffix: 'd', values: ['distribute']},
    //         {suffix: 'st', values: ['stretch']},
    //     ]
    // },
    {
        type: 'pattern',
        id: 'align-content',
        name: 'Align content',
        prefix: '.Ac-',
        properties: ['align-content'],
        rules: [
            {suffix: 'fs', values: ['flex-start']},
            {suffix: 'fe', values: ['flex-end']},
            {suffix: 'c', values: ['center']},
            {suffix: 'sb', values: ['space-between']},
            {suffix: 'sa', values: ['space-around']},
            {suffix: 'st', values: ['stretch']}
        ]
    },

    /* FLEX-ORDER  */
    //
    // TODO: 'flex-order' has been replaced by 'order'.
    // Previous version: http://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-order
    //   Latest version: http://www.w3.org/TR/css3-flexbox/#order-property
    //
    // {
    //     type: 'pattern',
    //     id: 'flex-order',
    //     name: 'Flex order',
    //     prefix: '.Flo-',
    //     properties: ['flex-order']
    // },
    {
        type: 'pattern',
        id: 'order',
        name: 'Order',
        prefix: '.Or-',
        properties: ['order'],
        allowCustom: true
    },

    /* FLEX-PACK  */
    //
    // TODO: 'flex-pack' has been replaced by 'justify-content'.
    // Previous version: http://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-pack
    //   Latest version: http://www.w3.org/TR/css3-flexbox/#justify-content-property
    //
    // {
    //     type: 'pattern',
    //     id: 'flex-pack',
    //     name: 'Flex pack',
    //     prefix: '.Flp-',
    //     properties: ['flex-pack'],
    //     rules: [
    //         {suffix: 's', values: ['start']},
    //         {suffix: 'e', values: ['end']},
    //         {suffix: 'c', values: ['center']},
    //         {suffix: 'j', values: ['justify']},
    //         {suffix: 'd', values: ['distribute']}
    //     ]
    // },
    {
        type: 'pattern',
        id: 'justify-content',
        name: 'Justify content',
        prefix: '.Jc-',
        properties: ['justify-content'],
        rules: [
            {suffix: 'fs', values: ['flex-start']},
            {suffix: 'fe', values: ['flex-end']},
            {suffix: 'c', values: ['center']},
            {suffix: 'sb', values: ['space-between']},
            {suffix: 'sa', values: ['space-around']}
        ]
    },

    /* FLEX-WRAP  */
    {
        type: 'pattern',
        id: 'flex-wrap',
        name: 'Flex-wrap',
        prefix: '.Flw-',
        properties: ['flex-wrap'],
        rules: [
            {suffix: 'nw', values: ['nowrap']},
            {suffix: 'w', values: ['wrap']},
            {suffix: 'wr', values: ['wrap-reverse']}
        ]
    },

    /**
     ==================================================================
     FLOAT
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'float',
        name: 'Float',
        prefix: '.Fl-',
        properties: ['float'],
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 'start', values: ['$START']},
            {suffix: 'end', values: ['$END']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },

    /**
     ==================================================================
     FONT-WEIGHT
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'font-weight',
        name: 'Font weight',
        prefix: '.Fw-',
        properties: ['font-weight'],
        rules: [
            {suffix: '100', values: ['100']},
            {suffix: '200', values: ['200']},
            {suffix: '300', values: ['300']},
            {suffix: '400', values: ['400']},
            {suffix: '500', values: ['500']},
            {suffix: '600', values: ['600']},
            {suffix: '700', values: ['700']},
            {suffix: '800', values: ['800']},
            {suffix: '900', values: ['900']},
            {suffix: 'b', values: ['bold']},
            {suffix: 'br', values: ['bolder']},
            {suffix: 'lr', values: ['lighter']},
            {suffix: 'n', values: ['normal']}
        ]
    },

    /**
     ==================================================================
     FONT-SIZE
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'font-size',
        name: 'Font size',
        prefix: '.Fz-',
        properties: ['font-size'],
        allowCustom: true,
        allowCustomAutoSuffix: true,
        suffixType: 'numerical',
        rules: [
            // not in alphabetical order since here they are in t-shirt size order
            {suffix: '0', values: ['0']},
            {suffix: 'xxs', values: ['xx-small']},
            {suffix: 'xs', values: ['x-small']},
            {suffix: 's', values: ['small']},
            {suffix: 'sr', values: ['smaller']},
            {suffix: 'm', values: ['medium']},
            {suffix: 'l', values: ['large']},
            {suffix: 'lr', values: ['larger']},
            {suffix: 'xl', values: ['x-large']},
            {suffix: 'xxl', values: ['xx-large']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },

    /**
     ==================================================================
     FONT-STYLE
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'font-style',
        name: 'Font style',
        prefix: '.Fs-',
        properties: ['font-style'],
        rules: [
            {suffix: 'n', values: ['normal']},
            {suffix: 'i', values: ['italic']},
            {suffix: 'o', values: ['oblique']}
        ]
    },

    /**
     ==================================================================
     FONT-VARIANT
     ==================================================================
     */
    // TODO: This rule has a lot more acceptable values.
    // http://dev.w3.org/csswg/css-fonts/#propdef-font-variant
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
    {
        type: 'pattern',
        id: 'font-variant',
        name: 'Font variant',
        prefix: '.Fv-',
        properties: ['font-variant'],
        rules: [
            {suffix: 'n', values: ['normal']},
            {suffix: 'sc', values: ['small-caps']},
        ]
    },

    /**
     ==================================================================
     HEIGHT
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'height',
        name: 'Height',
        prefix: '.H-',
        properties: ['height'],
        allowCustom: true,
        allowFraction: true,
        rules: [
            {suffix: '0', values: [0]},
            {suffix: 'a', values: ['auto']},
            {suffix: 'av', values: ['available']},
            {suffix: 'bb', values: ['border-box']},
            {suffix: 'cb', values: ['content-box']},
            {suffix: 'fc', values: ['fit-content']},
            {suffix: 'maxc', values: ['max-content']},
            {suffix: 'minc', values: ['min-content']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },

    /**
     ==================================================================
     HYPHENS
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'hyphens',
        name: 'Hyphens',
        prefix: '.Hy-',
        properties: ['hyphens'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']},
            {suffix: 'n', values: ['normal']},
            {suffix: 'm', values: ['manual']},
        ]
    },

    /**
     ==================================================================
     LIST-STYLE-TYPE
     ==================================================================
     */
     {
        type: 'pattern',
        id: 'list-style-type',
        name: 'List style type',
        prefix: '.List-',
        properties: ['list-style-type'],
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 'inh', values: ['inherit']},
            {suffix: 'd', values: ['disc']},
            {suffix: 'c', values: ['circle']},
            {suffix: 's', values: ['square']},
            {suffix: 'dc', values: ['decimal']},
            {suffix: 'dclz', values: ['decimal-leading-zero']},
            {suffix: 'lr', values: ['lower-roman']},
            {suffix: 'lg', values: ['lower-greek']},
            {suffix: 'll', values: ['lower-latin']},
            {suffix: 'ur', values: ['upper-roman']},
            {suffix: 'ul', values: ['upper-latin']},
            {suffix: 'a', values: ['armenian']},
            {suffix: 'g', values: ['georgian']},
            {suffix: 'la', values: ['lower-alpha']},
            {suffix: 'ua', values: ['upper-alpha']},
        ]
    },

    /**
     ==================================================================
     LIST-STYLE-IMAGE
     ==================================================================
     */
    // TODO: Validate URI
    {
        type: 'pattern',
        id: 'list-style-image',
        name: 'List style image',
        prefix: '.Lisi-',
        properties: ['list-style-image'],
        allowCustom: true,
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },

    /**
     ==================================================================
     LINE-HEIGHT
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'line-height',
        name: 'Line height',
        prefix: '.Lh-',
        properties: ['line-height'],
        allowCustom: true,
        rules: [
            {suffix: 'inh', values: ['inherit']},
            {suffix: 'n', values: ['normal']}
        ]
    },

    /**
     ==================================================================
     MARGINS
     ==================================================================
     */
    // all edges
    {
        type: 'pattern',
        id: 'margin',
        name: 'Margin (all edges)',
        prefix: '.M-',
        allowCustom: true,
        properties: ['margin'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']},
            {suffix: '0', values: [0]}
        ]
    },
    // top
    {
        type: 'pattern',
        id: 'margin-top',
        name: 'Margin top',
        prefix: '.Mt-',
        allowCustom: true,
        properties: ['margin-top'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']},
            {suffix: '0', values: [0]}
        ]
    },
    // end
    {
        type: 'pattern',
        id: 'margin-end',
        name: 'Margin end',
        prefix: '.Mend-',
        allowCustom: true,
        properties: ['margin-$END'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']},
            {suffix: '0', values: [0]}
        ]
    },
    // bottom
    {
        type: 'pattern',
        id: 'margin-bottom',
        name: 'Margin bottom',
        prefix: '.Mb-',
        allowCustom: true,
        properties: ['margin-bottom'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']},
            {suffix: '0', values: [0]}
        ]
    },
    // start
    {
        type: 'pattern',
        id: 'margin-start',
        name: 'Margin start',
        prefix: '.Mstart-',
        allowCustom: true,
        properties: ['margin-$START'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']},
            {suffix: '0', values: [0]}
        ]
    },
    // X axis
    {
        type: 'pattern',
        id: 'margin-x',
        name: 'Margin (X axis)',
        prefix: '.Mx-',
        allowCustom: true,
        properties: ['margin-$START', 'margin-$END'],
        rules: [
            {suffix: 'a', values: ['auto', 'auto']},
            {suffix: 'inh', values: ['inherit', 'inherit']},
            {suffix: '0', values: [0, 0]}
        ]
    },
    // Y axis
    {
        type: 'pattern',
        id: 'margin-y',
        name: 'Margin (Y axis)',
        prefix: '.My-',
        allowCustom: true,
        properties: ['margin-top', 'margin-bottom'],
        rules: [
            {suffix: 'a', values: ['auto', 'auto']},
            {suffix: 'inh', values: ['inherit', 'inherit']},
            {suffix: '0', values: [0, 0]}
        ]
    },
    /**
     ==================================================================
     MAX-HEIGHT
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'max-height',
        name: 'Max height',
        prefix: '.Mah-',
        allowCustom: true,
        properties: ['max-height'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']},
            {suffix: 'maxc', values: ['max-content']},
            {suffix: 'minc', values: ['min-content']},
            {suffix: 'fa', values: ['fill-available']},
            {suffix: 'fc', values: ['fit-content']}
        ]
    },
    /**
     ==================================================================
     MAX-WIDTH
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'max-width',
        name: 'Max width',
        prefix: '.Maw-',
        allowCustom: true,
        properties: ['max-width'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'fa', values: ['fill-available']},
            {suffix: 'fc', values: ['fit-content']},
            {suffix: 'maxc', values: ['max-content']},
            {suffix: 'minc', values: ['min-content']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     MIN-HEIGHT
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'min-height',
        name: 'Min height',
        prefix: '.Mih-',
        allowCustom: true,
        properties: ['min-height'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'fa', values: ['fill-available']},
            {suffix: 'fc', values: ['fit-content']},
            {suffix: 'maxc', values: ['max-content']},
            {suffix: 'minc', values: ['min-content']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     MIN-WIDTH
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'min-width',
        name: 'Min width',
        prefix: '.Miw-',
        allowCustom: true,
        properties: ['min-width'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'fa', values: ['fill-available']},
            {suffix: 'fc', values: ['fit-content']},
            {suffix: 'maxc', values: ['max-content']},
            {suffix: 'minc', values: ['min-content']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     OUTLINE
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'outline',
        name: 'Outline',
        prefix: '.O-',
        allowCustom: true,
        properties: ['outline'],
        rules: [
            {suffix: '0', values: [0]},
            {suffix: 'n', values: ['none']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     OFFSETS
     ==================================================================
     */
    // top
    {
        type: 'pattern',
        id: 'top',
        name: 'Top',
        prefix: '.T-',
        allowCustom: true,
        properties: ['top'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    // end
    {
        type: 'pattern',
        id: 'end',
        name: 'End',
        prefix: '.End-',
        allowCustom: true,
        properties: ['$END'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    // bottom
    {
        type: 'pattern',
        id: 'bottom',
        name: 'Bottom',
        prefix: '.B-',
        allowCustom: true,
        properties: ['bottom'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    // start
    {
        type: 'pattern',
        id: 'start',
        name: 'Start',
        prefix: '.Start-',
        allowCustom: true,
        properties: ['$START'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     OPACITY
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'opacity',
        name: 'Opacity',
        prefix: '.Op-',
        allowCustom: true,
        properties: ['opacity'],
        rules: [
            {suffix: '0', values: [0]},
            {suffix: '1', values: [1]},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     OVERFLOW
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'overflow',
        name: 'Overflow',
        prefix: '.Ov-',
        properties: ['overflow'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'h', values: ['hidden']},
            {suffix: 's', values: ['scroll']},
            {suffix: 'v', values: ['visible']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     OVERFLOW-X
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'overflow-x',
        name: 'Overflow (X axis)',
        prefix: '.Ovx-',
        properties: ['overflow-x'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'h', values: ['hidden']},
            {suffix: 's', values: ['scroll']},
            {suffix: 'v', values: ['visible']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     OVERFLOW-Y
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'overflow-y',
        name: 'Overflow (Y axis)',
        prefix: '.Ovy-',
        properties: ['overflow-y'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'h', values: ['hidden']},
            {suffix: 's', values: ['scroll']},
            {suffix: 'v', values: ['visible']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     OVERFLOW-SCROLLING (-webkit-)
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'overflow-scrolling',
        name: 'Overflow scrolling',
        prefix: '.Ovs-',
        properties: ['-webkit-overflow-scrolling'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'touch', values: ['touch']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     PADDING
     ==================================================================
     */
    // all edges
    {
        type: 'pattern',
        id: 'padding',
        name: 'Padding (all edges)',
        prefix: '.P-',
        allowCustom: true,
        properties: ['padding'],
        rules: [
            {suffix: '0', values: [0]},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    // top
    {
        type: 'pattern',
        id: 'padding-top',
        name: 'Padding top',
        prefix: '.Pt-',
        allowCustom: true,
        properties: ['padding-top'],
        rules: [
            {suffix: '0', values: [0]},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    // end
    {
        type: 'pattern',
        id: 'padding-end',
        name: 'Padding end',
        prefix: '.Pend-',
        allowCustom: true,
        properties: ['padding-$END'],
        rules: [
            {suffix: '0', values: [0]},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    // bottom
    {
        type: 'pattern',
        id: 'padding-bottom',
        name: 'Padding bottom',
        prefix: '.Pb-',
        allowCustom: true,
        properties: ['padding-bottom'],
        rules: [
            {suffix: '0', values: [0]},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    // start
    {
        type: 'pattern',
        id: 'padding-start',
        name: 'Padding start',
        prefix: '.Pstart-',
        allowCustom: true,
        properties: ['padding-$START'],
        rules: [
            {suffix: '0', values: [0]},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    // X axis
    {
        type: 'pattern',
        id: 'padding-x',
        name: 'Padding (X axis)',
        prefix: '.Px-',
        allowCustom: true,
        properties: ['padding-$START', 'padding-$END'],
        rules: [
            {suffix: '0', values: [0, 0]},
            {suffix: 'inh', values: ['inherit', 'inherit']}
        ]
    },
    // Y axis
    {
        type: 'pattern',
        id: 'padding-y',
        name: 'Padding (Y axis)',
        prefix: '.Py-',
        allowCustom: true,
        properties: ['padding-top', 'padding-bottom'],
        rules: [
            {suffix: '0', values: [0, 0]},
            {suffix: 'inh', values: ['inherit', 'inherit']}
        ]
    },
    /**
     ==================================================================
     POINTER-EVENTS
     ==================================================================
     */
     {
        type: 'pattern',
        id: 'pointer-events',
        name: 'Pointer events',
        prefix: '.Pe-',
        properties: ['pointer-events'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'all', values: ['all']},
            {suffix: 'f', values: ['fill']},
            {suffix: 'n', values: ['none']},
            {suffix: 'p', values: ['painted']},
            {suffix: 's', values: ['stroke']},
            {suffix: 'v', values: ['visible']},
            {suffix: 'vf', values: ['visibleFill']},
            {suffix: 'vp', values: ['visiblePainted']},
            {suffix: 'vs', values: ['visibleStroke']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     POSITION
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'position',
        name: 'Position',
        prefix: '.Pos-',
        properties: ['position'],
        rules: [
            {suffix: 'a', values: ['absolute']},
            {suffix: 'f', values: ['fixed']},
            {suffix: 'r', values: ['relative']},
            {suffix: 's', values: ['static']},
            {suffix: 'st', values: ['sticky']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     TABLE-LAYOUT (checked)
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'table-layout',
        name: 'Table layout',
        prefix: '.Tbl-',
        properties: ['table-layout'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'f', values: ['fixed']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     TEXT-ALIGN
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'text-align',
        name: 'Text align',
        prefix: '.Ta-',
        properties: ['text-align'],
        rules: [
            {suffix: 'c', values: ['center']},
            {suffix: 'e', values: ['end']},
            {suffix: 'end', values: ['$END']},
            {suffix: 'j', values: ['justify']},
            {suffix: 'mp', values: ['match-parent']},
            {suffix: 's', values: ['start']},
            {suffix: 'start', values: ['$START']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     TEXT-ALIGN-LAST
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'text-align-last',
        name: 'Text align last',
        prefix: '.Tal-',
        properties: ['text-align-last'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'c', values: ['center']},
            {suffix: 'e', values: ['end']},
            {suffix: 'end', values: ['$END']},
            {suffix: 'j', values: ['justify']},
            {suffix: 's', values: ['start']},
            {suffix: 'start', values: ['$START']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     TEXT-DECORATION
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'text-decoration',
        name: 'Text decoration',
        prefix: '.Td-',
        properties: ['text-decoration'],
        rules: [
            {suffix: 'l', values: ['line-through']},
            {suffix: 'n', values: ['none']},
            {suffix: 'o', values: ['overline']},
            {suffix: 'u', values: ['underline']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     TEXT-RENDERING
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'text-rendering',
        name: 'Text rendering',
        prefix: '.Tren-',
        properties: ['text-rendering'],
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'os', values: ['optimizeSpeed']},
            {suffix: 'ol', values: ['optimizeLegibility']},
            {suffix: 'gp', values: ['geometricPrecision']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     TEXT-REPLACE
     http://www.w3.org/TR/2007/WD-css3-gcpm-20070504/
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'text-replace',
        name: 'Text replace',
        prefix: '.Tr-',
        properties: ['text-replace'],
        allowCustom: true,
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     TEXT-TRANSFORM
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'text-transform',
        name: 'Text transform',
        prefix: '.Tt-',
        properties: ['text-transform'],
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 'c', values: ['capitalize']},
            {suffix: 'u', values: ['uppercase']},
            {suffix: 'l', values: ['lowercase']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     TEXT-SHADOW
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'text-shadow',
        name: 'Text shadow',
        prefix: '.Tsh-',
        properties: ['text-shadow'],
        allowCustom: true,
        allowCustomAutoSuffix: true,
        rules: [
            {suffix: 'n', values: ['none']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     USER-SELECT
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'user-select',
        name: 'User select',
        prefix: '.Us-',
        properties: ['user-select'],
        rules: [
            {suffix: 'a', values: ['all']},
            {suffix: 'el', values: ['element']},
            {suffix: 'els', values: ['elements']},
            {suffix: 'n', values: ['none']},
            {suffix: 't', values: ['text']},
            {suffix: 'to', values: ['toggle']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     VERTICAL-ALIGN
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'vertical-align',
        name: 'Vertical align',
        prefix: '.Va-',
        properties: ['vertical-align'],
        rules: [
            {suffix: 'b', values: ['bottom']},
            {suffix: 'bl', values: ['baseline']},
            {suffix: 'm', values: ['middle']},
            {suffix: 'sub', values: ['sub']},
            {suffix: 'sup', values: ['super']},
            {suffix: 't', values: ['top']},
            {suffix: 'tb', values: ['text-bottom']},
            {suffix: 'tt', values: ['text-top']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     VISIBILITY
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'visibility',
        name: 'Visibility',
        prefix: '.V-',
        properties: ['visibility'],
        rules: [
            {suffix: 'v', values: ['visible']},
            {suffix: 'h', values: ['hidden']},
            {suffix: 'c', values: ['collapse']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     WHITE-SPACE
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'white-space',
        name: 'White space',
        prefix: '.Whs-',
        properties: ['white-space'],
        rules: [
            {suffix: 'n', values: ['normal']},
            {suffix: 'p', values: ['pre']},
            {suffix: 'nw', values: ['nowrap']},
            {suffix: 'pw', values: ['pre-wrap']},
            {suffix: 'pl', values: ['pre-line']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     WHITE-SPACE-COLLAPSE
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'white-space-collapse',
        name: 'White space collapse',
        prefix: '.Whsc-',
        properties: ['white-space-collapse'],
        rules: [
            {suffix: 'n', values: ['normal']},
            {suffix: 'k', values: ['keep-all']},
            {suffix: 'l', values: ['loose']},
            {suffix: 'bs', values: ['break-strict']},
            {suffix: 'ba', values: ['break-all']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     WIDTH
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'width',
        name: 'Width',
        prefix: '.W-',
        properties: ['width'],
        allowCustom: true,
        allowCustomAutoSuffix: true,
        allowFraction: true,
        rules: [
            {suffix: '0', values: [0]},
            {suffix: 'a', values: ['auto']},
            {suffix: 'bb', values: ['border-box']},
            {suffix: 'cb', values: ['content-box']},
            {suffix: 'av', values: ['available']},
            {suffix: 'minc', values: ['min-content']},
            {suffix: 'maxc', values: ['max-content']},
            {suffix: 'fc', values: ['fit-content']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     WORD-BREAK
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'word-break',
        name: 'Word break',
        prefix: '.Wob-',
        properties: ['word-break'],
        rules: [
            {suffix: 'ba', values: ['break-all']},
            {suffix: 'k', values: ['keep-all']},
            {suffix: 'n', values: ['normal']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     WORD-WRAP (not part of the spec)
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'word-wrap',
        name: 'Word wrap',
        prefix: '.Wow-',
        properties: ['word-wrap'],
        rules: [
            {suffix: 'bw', values: ['break-word']},
            {suffix: 'n', values: ['normal']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     Z-INDEX
     ==================================================================
     */
    {
        type: 'pattern',
        id: 'z-index',
        name: 'Z index',
        prefix: '.Z-',
        properties: ['z-index'],
        allowCustom: true,
        allowCustomAutoSuffix: true,
        rules: [
            {suffix: 'a', values: ['auto']},
            {suffix: 'inh', values: ['inherit']}
        ]
    },
    /**
     ==================================================================
     RULES (Helpers)
     ==================================================================
     */
    {
        type: 'rule',
        id: 'reset',
        name: 'Reset',
        rule: {
            '.Reset,.ResetChildren > *': {
                'margin': 0,
                'padding': 0
            }
        }
    },
    // TODO: BLEED AS PATTERN
    {
        type: 'rule',
        id: 'bfc',
        name: 'Block formatting context',
        rule: {
            '.Bfc': {
                'overflow': 'hidden',
                'zoom': 1
            }
        }
    }
];
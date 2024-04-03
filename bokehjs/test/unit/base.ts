import {expect} from "assertions"

import {Models} from "@bokehjs/base"
import {Plot} from "@bokehjs/models"
import {Slider} from "@bokehjs/models/widgets"

describe("default model resolver", () => {

  it("should support resolution using get() method", () => {
    expect(Models.get("Plot")).to.be.equal(Plot)
    expect(Models.get("Slider")).to.be.equal(Slider)
  })

  it("should support resolution using property access", () => {
    expect(Models.Plot).to.be.equal(Plot)
    expect(Models.Slider).to.be.equal(Slider)
  })

  it("should support known model listing", () => {
    expect(Object.keys(Models)).to.be.equal([
      "AbstractButton",
      "ActionItem",
      "ActionTool",
      "AdaptiveTicker",
      "AjaxDataSource",
      "AllIndices",
      "AllLabels",
      "Angular",
      "Annotation",
      "AnnularWedge",
      "Annulus",
      "AnotherModel",
      "Arc",
      "AreaVisuals",
      "ArrowGlyph",
      "ArrowHead",
      "Ascii",
      "AutocompleteInput",
      "AvgAggregator",
      "Axis",
      "BBoxTileSource",
      "BandGlyph",
      "BaseColorBar",
      "BasicTickFormatter",
      "BasicTicker",
      "Bezier",
      "BinnedTicker",
      "Block",
      "BooleanFilter",
      "BooleanFormatter",
      "BoxAnnotation",
      "BoxEditTool",
      "BoxInteractionHandles",
      "BoxSelectTool",
      "BoxZoomTool",
      "BuiltinIcon",
      "Button",
      "ByCSS",
      "ByClass",
      "ByID",
      "ByXPath",
      "CDSView",
      "Canvas",
      "CanvasTexture",
      "CartesianFrame",
      "CategoricalAxis",
      "CategoricalColorMapper",
      "CategoricalMarkerMapper",
      "CategoricalPatternMapper",
      "CategoricalScale",
      "CategoricalSlider",
      "CategoricalTickFormatter",
      "CategoricalTicker",
      "CellEditor",
      "CellFormatter",
      "CheckableItem",
      "Checkbox",
      "CheckboxButtonGroup",
      "CheckboxEditor",
      "CheckboxGroup",
      "Circle",
      "ClickButton",
      "ClickPanTool",
      "CloseDialog",
      "ColorBar",
      "ColorMapper",
      "ColorPicker",
      "Column",
      "ColumnDataSource",
      "ColumnarDataSource",
      "Comparison",
      "CompositeScale",
      "CompositeTicker",
      "ContinuousAxis",
      "ContinuousColorMapper",
      "ContinuousScale",
      "ContinuousTicker",
      "ContourColorBar",
      "ContourRenderer",
      "CoordinateMapping",
      "CopyTool",
      "CrosshairTool",
      "CumSum",
      "CustomAction",
      "CustomJS",
      "CustomJSCompare",
      "CustomJSExpr",
      "CustomJSFilter",
      "CustomJSHover",
      "CustomJSTickFormatter",
      "CustomJSTicker",
      "CustomJSTransform",
      "CustomLabelingPolicy",
      "DataCube",
      "DataRange",
      "DataRange1d",
      "DataSource",
      "DataTable",
      "DateEditor",
      "DateFormatter",
      "DatePicker",
      "DateRangePicker",
      "DateRangeSlider",
      "DateSlider",
      "DatetimeAxis",
      "DatetimePicker",
      "DatetimeRangePicker",
      "DatetimeRangeSlider",
      "DatetimeTickFormatter",
      "DatetimeTicker",
      "DaysTicker",
      "Decoration",
      "Dialog",
      "DifferenceFilter",
      "Div",
      "DividerItem",
      "Dodge",
      "Drawer",
      "Dropdown",
      "EdgeCoordinates",
      "EdgesAndLinkedNodes",
      "EdgesOnly",
      "EditTool",
      "Ellipse",
      "EqHistColorMapper",
      "ExamineTool",
      "Examiner",
      "Expression",
      "FactorRange",
      "Figure",
      "FileInput",
      "Filter",
      "FixedTicker",
      "FlexBox",
      "FreehandDrawTool",
      "FullscreenTool",
      "GMap",
      "GMapOptions",
      "GMapPlot",
      "GeoJSONDataSource",
      "GestureTool",
      "GlobalImportedStyleSheet",
      "GlobalInlineStyleSheet",
      "Glyph",
      "GlyphRenderer",
      "GraphCoordinates",
      "GraphHitTestPolicy",
      "GraphRenderer",
      "Grid",
      "GridBox",
      "GridPlot",
      "GroupBox",
      "GroupByModels",
      "GroupByName",
      "GroupFilter",
      "GroupingInfo",
      "GuideRenderer",
      "HArea",
      "HAreaStep",
      "HBar",
      "HBox",
      "HSpan",
      "HStrip",
      "HTMLLabel",
      "HTMLLabelSet",
      "HTMLTemplateFormatter",
      "HTMLTitle",
      "HelpButton",
      "HelpTool",
      "HexTile",
      "HoverTool",
      "Image",
      "ImageRGBA",
      "ImageStack",
      "ImageURL",
      "ImageURLTexture",
      "ImperialLength",
      "ImportedStyleSheet",
      "IndexFilter",
      "Indexed",
      "InlineStyleSheet",
      "InputWidget",
      "InspectTool",
      "IntEditor",
      "Interpolator",
      "IntersectRenderers",
      "IntersectionFilter",
      "InversionFilter",
      "Jitter",
      "Label",
      "LabelingPolicy",
      "LassoSelectTool",
      "LayoutDOM",
      "LayoutProvider",
      "Legend",
      "LegendItem",
      "Line",
      "LineEditTool",
      "LinearAxis",
      "LinearColorMapper",
      "LinearInterpolationScale",
      "LinearInterpolator",
      "LinearScale",
      "LogAxis",
      "LogColorMapper",
      "LogScale",
      "LogTickFormatter",
      "LogTicker",
      "MapOptions",
      "Marking",
      "Markup",
      "MathML",
      "MathMLGlyph",
      "MathText",
      "MaxAggregator",
      "Maximum",
      "Menu",
      "MercatorAxis",
      "MercatorTickFormatter",
      "MercatorTicker",
      "MercatorTileSource",
      "Metric",
      "MetricLength",
      "MinAggregator",
      "Minimum",
      "ModelWithConstructTimeChanges",
      "MonthsTicker",
      "MultiChoice",
      "MultiLine",
      "MultiPolygons",
      "MultiSelect",
      "MultipleDatePicker",
      "MultipleDatetimePicker",
      "NanCompare",
      "Ngon",
      "NoOverlap",
      "Node",
      "NodeCoordinates",
      "NodesAndAdjacentNodes",
      "NodesAndLinkedEdges",
      "NodesOnly",
      "NormalHead",
      "NumberEditor",
      "NumberFormatter",
      "NumeralTickFormatter",
      "NumericInput",
      "OnOffButton",
      "OpenDialog",
      "OpenHead",
      "OpenURL",
      "PaletteSelect",
      "PanTool",
      "Pane",
      "Panel",
      "Paragraph",
      "ParkMillerLCG",
      "PasswordInput",
      "Patch",
      "Patches",
      "PercentEditor",
      "PlainText",
      "Plot",
      "PointDrawTool",
      "PolarTransform",
      "PolyAnnotation",
      "PolyDrawTool",
      "PolyEditTool",
      "PolySelectTool",
      "PolyTool",
      "PreText",
      "PrintfTickFormatter",
      "QUADKEYTileSource",
      "Quad",
      "Quadratic",
      "RadioButtonGroup",
      "RadioGroup",
      "Range",
      "Range1d",
      "RangeSlider",
      "RangeTool",
      "Ray",
      "ReciprocalMetric",
      "ReciprocalMetricLength",
      "Rect",
      "RedoTool",
      "Renderer",
      "RendererGroup",
      "ResetTool",
      "Row",
      "SVGIcon",
      "SaveTool",
      "ScalarExpression",
      "Scale",
      "ScaleBar",
      "ScanningColorMapper",
      "Scatter",
      "ScientificFormatter",
      "ScrollBox",
      "Segment",
      "Select",
      "SelectEditor",
      "SelectTool",
      "Selection",
      "SelectionPolicy",
      "ServerSentDataSource",
      "SetValue",
      "SingleIntervalTicker",
      "Slider",
      "Slope",
      "SomeModel",
      "SomeModelWithChildren",
      "Spacer",
      "Span",
      "Spinner",
      "Spline",
      "Stack",
      "StackColorMapper",
      "StaticLayoutProvider",
      "Step",
      "StepInterpolator",
      "StringEditor",
      "StringFormatter",
      "Styles",
      "SumAggregator",
      "Switch",
      "SymmetricDifferenceFilter",
      "TMSTileSource",
      "TabPanel",
      "TableColumn",
      "TableWidget",
      "TablerIcon",
      "Tabs",
      "TapTool",
      "TeX",
      "TeXGlyph",
      "TeeHead",
      "Text",
      "TextAnnotation",
      "TextAreaInput",
      "TextEditor",
      "TextInput",
      "Texture",
      "TickFormatter",
      "Ticker",
      "TileRenderer",
      "TileSource",
      "TimeEditor",
      "TimePicker",
      "Title",
      "Toggle",
      "ToggleVisibility",
      "Tool",
      "ToolButton",
      "ToolProxy",
      "Toolbar",
      "ToolbarPanel",
      "Tooltip",
      "Transform",
      "UIElement",
      "UndoTool",
      "UnionFilter",
      "UnionRenderers",
      "VArea",
      "VAreaStep",
      "VBar",
      "VBox",
      "VSpan",
      "VStrip",
      "VeeHead",
      "WMTSTileSource",
      "WebDataSource",
      "Wedge",
      "WeightedStackColorMapper",
      "WheelPanTool",
      "WheelZoomTool",
      "WhiskerGlyph",
      "Widget",
      "XComponent",
      "XY",
      "YComponent",
      "YearsTicker",
      "ZoomInTool",
      "ZoomOutTool",
      "bokeh.models.dom.Action",
      "bokeh.models.dom.ColorRef",
      "bokeh.models.dom.DOMElement",
      "bokeh.models.dom.DOMNode",
      "bokeh.models.dom.Div",
      "bokeh.models.dom.HTML",
      "bokeh.models.dom.Index",
      "bokeh.models.dom.Placeholder",
      "bokeh.models.dom.Span",
      "bokeh.models.dom.Table",
      "bokeh.models.dom.TableRow",
      "bokeh.models.dom.Template",
      "bokeh.models.dom.Text",
      "bokeh.models.dom.ToggleGroup",
      "bokeh.models.dom.ValueOf",
      "bokeh.models.dom.ValueRef",
    ])
  })
})

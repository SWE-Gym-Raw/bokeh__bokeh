""" Renderers for various kinds of annotations that can be added to
Bokeh plots

"""
from __future__ import absolute_import

from ..enums import Orientation, SpatialUnits, RenderLevel
from ..mixins import LineProps, FillProps, TextProps
from ..properties import (Int, String, Enum, Instance, List, Dict, Tuple,
                          Include, NumberSpec, Bool, Either, Auto)

from .renderers import Renderer, GlyphRenderer

class Legend(Renderer):
    """ Render informational legends for a plot.

    """

    plot = Instance(".models.plots.Plot", help="""
    The Plot to which this Legend is attached.
    """)

    orientation = Enum(Orientation, help="""
    The location where the legend should draw itself.
    """)

    border_props = Include(LineProps, help="""
    The %s for the legend border outline.
    """)

    background_props = Include(FillProps, help="""
    The %s for the legend background style.
    """)

    label_props = Include(TextProps, help="""
    The %s for the legend labels.
    """)

    label_standoff = Int(15, help="""
    The distance (in pixels) to separate the label from its associated glyph.
    """)

    label_height = Int(20, help="""
    The height (in pixels) of the area that legend labels should occupy.
    """)

    label_width = Int(50, help="""
    The width (in pixels) of the area that legend labels should occupy.
    """)

    glyph_height = Int(20, help="""
    The height (in pixels) that the rendered legend glyph should occupy.
    """)

    glyph_width = Int(20, help="""
    The width (in pixels) that the rendered legend glyph should occupy.
    """)

    legend_padding = Int(10, help="""
    Amount of padding around the legend.
    """)

    legend_spacing = Int(3, help="""
    Amount of spacing between legend entries.
    """)

    legends = List(Tuple(String, List(Instance(GlyphRenderer))), help="""
    A list of tuples that maps text labels to the legend to corresponding
    renderers that should draw sample representations for those labels.

    .. note::
        The ``legends`` attribute may also be set from a dict or OrderedDict,
        but note that if a dict is used, the order of the legend entries is
        unspecified.

    """).accepts(
        Dict(String, List(Instance(GlyphRenderer))), lambda d: list(d.items())
    )

class BoxAnnotation(Renderer):
    """ Render an annotation box "shade" thing

    """
    plot = Instance(".models.plots.Plot", help="""
    The Plot to which this Legend is attached.
    """)

    left = Either(Auto, NumberSpec("left"), help="""
    The x-coordinates of the left edges.
    """)

    left_units = Enum(SpatialUnits, default='data', help="""
    The unit type for the left attribute. Interpreted as "data space" units
    by default
    """)

    right = Either(Auto, NumberSpec("right"), help="""
    The x-coordinates of the right edges.
    """)

    right_units = Enum(SpatialUnits, default='data', help="""
    The unit type for the right attribute. Interpreted as "data space" units
    by default
    """)

    bottom = Either(Auto, NumberSpec("bottom"), help="""
    The y-coordinates of the bottom edges.
    """)

    bottom_units = Enum(SpatialUnits, default='data', help="""
    The unit type for the bottom attribute. Interpreted as "data space" units
    by default
    """)

    top = Either(Auto, NumberSpec("top"), help="""
    The y-coordinates of the top edges.
    """)

    top_units = Enum(SpatialUnits, default='data', help="""
    The unit type for the top attribute. Interpreted as "data space" units
    by default
    """)

    line_props = Include(LineProps, use_prefix=False, help="""
    The %s values for the shades.
    """)

    fill_props = Include(FillProps, use_prefix=False, help="""
    The %s values for the shades.
    """)

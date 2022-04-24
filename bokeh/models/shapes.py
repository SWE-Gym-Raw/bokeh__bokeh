#-----------------------------------------------------------------------------
# Copyright (c) 2012 - 2022, Anaconda, Inc., and Bokeh Contributors.
# All rights reserved.
#
# The full license is in the file LICENSE.txt, distributed with this software.
#-----------------------------------------------------------------------------
"""

"""

#-----------------------------------------------------------------------------
# Boilerplate
#-----------------------------------------------------------------------------

import logging # isort:skip
log = logging.getLogger(__name__)

#-----------------------------------------------------------------------------
# Imports
#-----------------------------------------------------------------------------

# Bokeh imports
from ..core.enums import (
    AngleUnits,
    CoordinateUnits,
    Direction,
    RadiusDimension,
)
from ..core.has_props import HasProps, Qualified, abstract
from ..core.properties import (
    Angle,
    Bool,
    Enum,
    Float,
    Include,
    Instance,
    List,
    NonNegative,
    NonNullable as Required,
    Nullable,
    Override,
    Seq,
)
from ..core.property_mixins import ScalarFillProps, ScalarHatchProps, ScalarLineProps
from .graphics import Decoration
from .renderers import Renderer
from .coordinates import Coordinate

#-----------------------------------------------------------------------------
# Globals and constants
#-----------------------------------------------------------------------------

__all__ = (
    "AnnularWedge",
    "Annulus",
    "Arc",
    "Bezier",
#   "Box",
    "Circle",
#   "Line",
#   "Polygon",
#   "Polyline",
#   "Slope",
#   "Span",
    "Spline",
    "Wedge",
)

#-----------------------------------------------------------------------------
# General API
#-----------------------------------------------------------------------------

@abstract
class Shape(Renderer, Qualified):
    """ """

    # explicit __init__ to support Init signatures
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

    level = Override(default="annotation")

@abstract
class Path(HasProps):

    line_props = Include(ScalarLineProps)

@abstract
class Area(HasProps):

    fill_props = Include(ScalarFillProps)
    hatch_props = Include(ScalarHatchProps)
    line_props = Include(ScalarLineProps)

class AnnularWedge(Shape, Area):
    """ """

    # explicit __init__ to support Init signatures
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

    center = Required(Instance(Coordinate))

    inner_radius = Required(NonNegative(Float))
    outer_radius = Required(NonNegative(Float))
    radius_dimension = Enum(RadiusDimension, default="x")

    start_angle = Required(Angle)
    end_angle = Required(Angle)
    angle_units = Enum(AngleUnits, default="rad")
    direction = Enum(Direction, default="anticlock")

class Annulus(Shape, Area):
    """ """

    # explicit __init__ to support Init signatures
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

    center = Required(Instance(Coordinate))

    inner_radius = Required(NonNegative(Float))
    outer_radius = Required(NonNegative(Float))
    radius_dimension = Enum(RadiusDimension, default="x")

class Arc(Shape, Path):
    """ """

    # explicit __init__ to support Init signatures
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

    center = Required(Instance(Coordinate))

    radius = Required(NonNegative(Float))
    radius_dimension = Enum(RadiusDimension, default="x")

    start_angle = Required(Angle)
    end_angle = Required(Angle)
    angle_units = Enum(AngleUnits, default="rad")
    direction = Enum(Direction, default="anticlock")

    decorations = List(Instance(Decoration), default=[])

class Bezier(Shape, Path):
    """ """

    # explicit __init__ to support Init signatures
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

    p0 = Required(Instance(Coordinate))
    p1 = Required(Instance(Coordinate))

    cp0 = Required(Instance(Coordinate))
    cp1 = Nullable(Instance(Coordinate), default=None)

class Circle(Shape, Area):
    """ """

    # explicit __init__ to support Init signatures
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

    center = Required(Instance(Coordinate))

    radius = Required(NonNegative(Float))
    radius_dimension = Enum(RadiusDimension, default="x")

class Spline(Shape, Path):
    """ """

    # explicit __init__ to support Init signatures
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

    xs = Seq(Float, default=[])
    ys = Seq(Float, default=[])
    xs_units = Enum(CoordinateUnits, default="data")
    ys_units = Enum(CoordinateUnits, default="data")

    tension = Float(default=0.5)
    closed = Bool(default=False)

class Wedge(Shape, Area):
    """ """

    # explicit __init__ to support Init signatures
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

    center = Required(Instance(Coordinate))

    radius = Required(NonNegative(Float))
    radius_dimension = Enum(RadiusDimension, default="x")

    start_angle = Required(Angle)
    end_angle = Required(Angle)
    angle_units = Enum(AngleUnits, default="rad")
    direction = Enum(Direction, default="anticlock")

#-----------------------------------------------------------------------------
# Dev API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Private API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Code
#-----------------------------------------------------------------------------
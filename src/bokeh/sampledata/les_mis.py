#-----------------------------------------------------------------------------
# Copyright (c) 2012 - 2024, Anaconda, Inc., and Bokeh Contributors.
# All rights reserved.
#
# The full license is in the file LICENSE.txt, distributed with this software.
#-----------------------------------------------------------------------------
''' Provide JSON data for co-occurrence of characters in Les Miserables.

License: `CC BY-ND 4.0`_

Source from http://ftp.cs.stanford.edu/pub/sgb/jean.dat

This module contains one dictionary: ``data``.

.. rubric:: ``data``

.. code-block::

    {
        'nodes': [
            {'name': 'Myriel', 'group': 1},
            ...
            {'name': 'Mme.Hucheloup', 'group': 8}
        ],
        'links': [
            {'source': 1, 'target': 0, 'value': 1},
            ...
            {'source': 76, 'target': 58, 'value': 1}
        ]
    }

.. bokeh-sampledata-xref:: les_mis
'''

#-----------------------------------------------------------------------------
# Boilerplate
#-----------------------------------------------------------------------------
from __future__ import annotations

import logging # isort:skip
log = logging.getLogger(__name__)

#-----------------------------------------------------------------------------
# Imports
#-----------------------------------------------------------------------------

# Bokeh imports
from ..util.sampledata import load_json, package_path

#-----------------------------------------------------------------------------
# Globals and constants
#-----------------------------------------------------------------------------

__all__ = (
    'data',
)

#-----------------------------------------------------------------------------
# General API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Dev API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Private API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Code
#-----------------------------------------------------------------------------

data = load_json(package_path('les_mis.json'))

elShaker - A jQuery element shaking extension
=============================================

elShaker is a jQuery plugin for simple side to side element shaking. Perfect to visualize a wrong input in form submissions.

Requirements
------------
`jQuery <http://jquery.com/>`_ (v1.10.2 is included with the extension)

Usage
~~~~~
`$('element').shake(number of shakes, shake distance, total duration);`

**number of shakes** - Total number of shakes of the element, each shake consists of a shake left and a shake right.

**shake distance** - Number of pixel to shake to each side.

**total duration** - Overall time of the animation, split between all animation parts.

Example
~~~~~~~
::

    $('#myelement').shake(3, 10, 500);

`DEMO <https://github.com/leandigo/elShaker/master/example/index.html>`_

License
-------
Copyright (c) 2013, Leandigo (|leandigo|_)
Released under the MIT License. See the LICENSE file for details.

.. |leandigo| replace:: www.leandigo.com
.. _leandigo: http://www.leandigo.com
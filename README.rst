elShaker - A jQuery plugin for element shaking
==============================================

elShaker is a jQuery plugin for simple side to side element shaking. Perfect to visualize a wrong input in form submissions.

Requirements
------------
`jQuery <http://jquery.com/>`_ (v1.10.2 is included)

Usage
~~~~~

Once you've added ``jquery.elshaker.js`` to the list of script files that are loaded in your html page, simply call the *shake* method on the element:
::

    $('element').shake(options);

Options
~~~~~~~

.. csv-table::
   :header: "Name", "Type", "Default", "Description"
   :widths: 20, 10, 10, 200

   shakes,      int,   3,   "Total number of element shakes, where each shake consists of a shake left and a shake right"
   distance,    int,   10,  "Number of pixels to shake to each side"
   duration,    int,   500, "Overall time of the animation, split between all animation parts"

Example
~~~~~~~
::

    $('#myelement').shake({shakes: 3, distance: 10, duration: 500});


`DEMO <http://leandigo.github.io/elShaker/>`_

License
-------
Copyright (c) 2013, Leandigo (|leandigo|_)

Released under the MIT License. See the LICENSE file for details.

.. |leandigo| replace:: www.leandigo.com
.. _leandigo: http://www.leandigo.com

.. image:: https://d2weczhvl823v0.cloudfront.net/leandigo/elShaker/trend.png
   :alt: Bitdeli badge
   :target: https://bitdeli.com/free
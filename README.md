[![Build Status](https://travis-ci.org/bapjiws/timezones_v.svg?branch=master)](https://travis-ci.org/bapjiws/timezones_v)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/262109c2f06e40858c881f30a1c691ac)](https://www.codacy.com/app/alex-boklin/timezones_v?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=bapjiws/timezones_v&amp;utm_campaign=Badge_Grade)

A simple React+Redux webapp allowing to create a list of cities with their respective local times (updated in real time) via auto-completion.
This app (the V part of the MVC) relies on the [Go server + ElasticSearch service](https://github.com/bapjiws/timezones_mc) as a source of suggestions
and also uses Google Maps API for additional geographical information.

Snapshot
=======

Some times ago, I had to update my soccer card but I had no photo at home and I did not want to go to the photographer.  
At the same time, I wanted to do something with HTML5 and its new feature of dealing with audio and video.  
So I followed a guide from [html5rocks](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) and I written this code: a simple page that let you take a *selfie*, apply some CSS3 filter and print the photo the same way if you had gone to the photographer.  

Note:
* Photo are printed according to Italian standard (33mm*40mm) and I have used the usual rule for converting millimetres to PostScript point (source [Wikipedia](http://en.wikipedia.org/wiki/PostScript)):

    1 pt = 1/72 inch = 0.35mm
    
* CSS and JS have been written for my camera resolution, that is 640*480px. If you want to adapt them you can easily calculate the proportion and edit the source code.


Hou to use
---------
I have developed and tested this page on Ubuntu 12.04 with Chrome. If you want to access media locally from your browser, you have to pass behind a web server. You can easily do that with Python.  
Go to your source home directory, open a terminal and type:  

    python -m SimpleHTTPServer

Then, open your browser at `http://localhost:8000` and take your snapshot!

;///Modifiers\\\;
;# = Windows Key;
;! = Alt;        
;^ = Control;
;+ = Shift;
;& = Used to combine keys (ctrl+alt = ^&!);

; /capture=0 takes a screenshot of the whole desktop
; /capture=1 takes a screenshot of the active window
; /capture=2 takes a screenshot of the client area of the active window


PrintScreen::
ifnotexist, C:\Users\Erin\Desktop   ; Location Of The Saved Capture
fileCreateDir, C:\Users\Erin\Desktop   ; Location Of The Saved Capture
Run, "C:\Program Files (x86)\IrfanView\i_view32.exe" /capture=0 /convert=C:\Users\Erin\Desktop\GilliamII_$U(`%Y-`%m-`%d_`%S).png
return

!PrintScreen::
ifnotexist, C:\Users\Erin\Desktop   ; Location Of The Saved Capture
fileCreateDir, C:\Users\Erin\Desktop   ; Location Of The Saved Capture
Run, "C:\Program Files (x86)\IrfanView\i_view32.exe" /capture=2 /convert=C:\Users\Erin\Desktop\GilliamII_$U(`%Y-`%m-`%d_`%S).png
return

#PrintScreen::
ifnotexist, C:\Users\Erin\Desktop   ; Location Of The Saved Capture
fileCreateDir, C:\Users\Erin\Desktop   ; Location Of The Saved Capture
Run, "C:\Program Files (x86)\IrfanView\i_view32.exe" /capture=1 /convert=C:\Users\Erin\Desktop\GilliamII_$U(`%Y-`%m-`%d_`%S).png
return


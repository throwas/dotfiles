#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Recommended for catching common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

PgUp::
Run, C:\Program Files (x86)\foobar2000\foobar2000.exe /runcmd-playing="Legacy Commands (unsorted)/Customdb Love 1"
Run, C:\Program Files (x86)\foobar2000\foobar2000.exe /runcmd-playing="Last.fm/Last.fm Love Track"
return
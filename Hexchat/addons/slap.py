__module_name__ = "Hexchat Slap"
__module_version__ = "1.0"
__module_description__ = "A classic IRC '/slap' command."
__author__ = "sentriz"

full_name = "{} v{} by {}".format(__module_name__,__module_version__,__author__)
help_hook = "\"/slap [nick]\" will slap a [nick]."

import hexchat

def slapplugin(word, word_eol, userdata):

    if len(word) == 2:
        hexchat.command("me slaps \002{}\002 around a bit with a large trout.".format(word[1]))
        return hexchat.EAT_ALL
    elif len(word) >= 3:
        hexchat.prnt("One nick at a time. " + help_hook)
        return hexchat.EAT_ALL
    else:
        hexchat.prnt("You slapped no-one. " + help_hook)
        return hexchat.EAT_ALL

hexchat.hook_command("slap",slapplugin,help=help_hook)
hexchat.prnt(full_name + " loaded.")

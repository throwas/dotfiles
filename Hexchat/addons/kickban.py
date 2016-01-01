import hexchat

__module_name__ = "Kickban"
__module_version__ = "0.4.1"
__module_description__ = "Kickban command."

host_list = {}

def get_Host (user):
    list = hexchat.get_list('users')
    for object in list:
        if user.lower() == object.nick.lower():
            host = "*!*@" + object.host.split("@")[1]
            return host
    return user

def un_Ban (word, word_eol, userdata):
    user = word[1]
    if user in host_list:
        hexchat.command("unban " + host_list[user])
        del host_list[user]
    else:
        hexchat.command("unban " + user)
    return hexchat.EAT_ALL

def kick_Ban (word, word_eol, userdata):
    user = word[1]
    host_list[user] = get_Host(user)
    hexchat.command("kick " + user + " " + word_eol[2])
    if len(word_eol) >= 3:
        hexchat.command("ban " + host_list[user])
    else:
        hexchat.command("ban " + host_list[user])
    return hexchat.EAT_ALL

hexchat.hook_command("kb", kick_Ban)
hexchat.hook_command("ub", un_Ban)

print "Loaded", __module_name__, __module_version__
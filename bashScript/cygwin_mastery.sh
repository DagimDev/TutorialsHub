# Cygwin Mastery Tutorial - Windows Linux Environment

### SECTION 1: CYGWIN SETUP ###
# 1: "Install Cygwin base packages"
# Run Cygwin Setup (setup-x86_64.exe) and select:
# - curl, wget, git, openssh, tar, gzip

# 2: "Configure shell startup"
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bashrc
echo 'alias ll="ls -alh --color=auto"' >> ~/.bashrc
source ~/.bashrc

### SECTION 2: FILE SYSTEM INTEGRATION ###
# 3: "Mount Windows drives"
# Add to /etc/fstab:
# C:/cygwin64 /home ntfs binary,posix=0 0 0
mount -f

# 4: "Create symlink to Documents"
ln -s "/cygdrive/c/Users/$USER/Documents" ~/Documents

### SECTION 3: PACKAGE MANAGEMENT ###
# 5: "Update all packages"
apt-cyg update
apt-cyg upgrade

# 6: "Install developer tools"
apt-cyg install make gcc-core gdb cmake

### SECTION 4: WINDOWS-LINUX INTEROP ###
# 7: "Run Windows exe from Cygwin"
notepad.exe &

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

# 8: "Convert path formats"
cygpath -w ~/Documents
cygpath -u 'C:\Windows\System32'

### SECTION 5: NETWORKING ###
# 9: "SSH server setup"
ssh-host-config -y
net start sshd

# 10: "Port forwarding"
ssh -L 8080:localhost:80 user@remote-server

### SECTION 6: SHELL SCRIPTING ###
# 11: "Create cross-platform script"
if [[ $(uname -o) == Cygwin ]]; then
  PROGRAM_FILES="/cygdrive/c/Program\ Files"
else
  PROGRAM_FILES="/usr/local"
fi

### SECTION 7: DEVELOPMENT ENV ###
# 12: "Build Linux software"
./configure --prefix=/usr/local
make -j4
make install

# 13: "Python virtualenv"
python -m venv ~/venv/project
source ~/venv/project/Scripts/activate

## Dialog Shutdown

agar shutdown bisa aman, jangan lansung power off, tapi tambahkan file berikut.

1. Copy file safe_shutdown.sh ke /usr/local/bin/
2. jadikan file tsb executable

```
sudo chmod +x /usr/local/bin/safe_shutdown.sh
```

3. Since safe_shutdown.sh uses sudo, you may need to allow your user to run it without a password:

```
sudo visudo
```

4. Add this line at the bottom:

```
your_username ALL=(ALL) NOPASSWD: /usr/local/bin/safe_shutdown.sh
```

5. Install shutdown-dialog.deb

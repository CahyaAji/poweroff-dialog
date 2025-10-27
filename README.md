## Dialog Shutdown

agar shutdown bisa aman, jangan lansung power off, tapi tambahkan file berikut.

1. Copy file safe_shutdown.sh ke /usr/local/bin/
2. jadikan file tsb executable

```
sudo chmod +x /usr/local/bin/safe_shutdown.sh
```

3. Karena safe_shutdown.sh menggunakan sudo, maka perlu ijinkan user utk run tanpa password:

```
sudo visudo
```

4. Tambahkan ke line paling bawah:

```
your_username ALL=(ALL) NOPASSWD: /usr/local/bin/safe_shutdown.sh
```

5. lakukan hal yg sama utk fungsi restart
6. Install shutdown-dialog.deb

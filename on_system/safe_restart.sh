#!/bin/bash
sync         # Flush filesystem buffers
sleep 2      # Allow time for writes to complete
sudo reboot

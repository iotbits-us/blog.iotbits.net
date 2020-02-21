---
title: ModbusBox General Information
cover: /media/System3.png
date: 2020-02-17T20:49:03.745Z
description: General information
tags:
  - post
---
ModbusBox is a product developed by IOTBITS that allows the integration of industrial  controllers and devices that have   Modbus RTU as its base communication protocol into the IoT world. ModbusBox is easy to use thanks to its embedded web configuration portal accessible via Wi-Fi when set to work as  access point mode (AP) and client mode after its connected  to your local  WIFI network.  ModbusBox  is capable to read data registers  from Modbus slaves (maximum 4)  and  send data periodically  to cloud or local IOT services using the very popular MQTT protocol.  Data  is serialized    using  JSON format, so it's very easy to parse the information on the IOT server. Slaves variables  can be processed and displayed in dashboards  by many open source IOT platforms like Node-red, InfluxDB & Grafana,  Ubidots educational and  its pay platform which is very powerfully and easy to use.  ModbusBox   has been tested and optimized to be connected to  Variable frequency drives, but it also can be setup to be connected to other devices like PLC's, power energy meters and many different industrial products.\
ModbusBox advanced version can be easily customized to add new Slaves and functions,  this feature is very powerful for those wanting to try ModbusBox with other devices  as long as the user has a clear picture of the devices Modbus register addresses. 

**General Features.**

WIFI ready.  Modbus RTU /RS485 (2 wires) half duplex.\
Built-in Modbus library with examples ( Makers version).

AP mode allow setup: Modbus registers, WIFI connection and MQTT server.  Client mode is the default mode which it get connected to WIFI (internet) .
Built-in web server available in AP and Client Mode.
Managed by Web GUI.
Compact device, robust against interference and ESD discharges.
DC input  6-26 Volts.
IP 54.
Led's indicators.
Modbus Tx/Rx activity.
MQTT Tx/Rx.
Multi-state pixel led.
Wi-Fi connection status.
MQTT connection failure.
Modbus read failure.
**Modbus specs.**  Functions codes supported.\
0x3 :Read multiple 16 bit holding registers.\
0x4 :Read multiple 16 bit input register. 32 bits register and floating points. 32 bit data types (integer and float) uses contiguous array of  2 x 16 bit registers.
Support for IEEE 754 format floating-point.
Maximum number of slaves ( model dependent).
MB-B1Wxx : Support  1 slave.
MB-A4Wxx : Support 4 slaves.

**IoT protocol specs.**  MQTT with TLS Encryption.  ModbusBox pack each slave data  in JSON Object containing all selected devices registers. 

ModbusBox also send JSON object with variables indicating its own the operational status, like the IP addresses, SSID which is connected, running time, and SSID strength.

**Supported web browsers.** Google chrome ( Os :Windows,  Android, Ubuntu, iOS).  Safari ( Os : iOS).
Firefox (Os: Windows & Ubuntu)

**Tested IoT Platforms.**  Node-red. Ubidots.
Amazon AWS IoT.

END

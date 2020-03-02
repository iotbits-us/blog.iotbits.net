---
title: Connecting ModbusBox to Ubidots
date: 2020-03-02T00:08:16.478Z
description: A guide through the process of getting the ModbusBox connected to Ubidots
---
## Introduction

ModbusBox is easy to use thanks to its embedded Web-UI accessible via Wi-Fi.  When device is brand new or Wi-Fi hasn’t been set it can be configured as a  access point mode (AP).  Client mode is running all time after its connected to your local Wi-Fi network which make it very convenient for re- configure the device remotely while connected to your Local Wi-Fi network.  ModbusBox is capable to read data registers from Modbus slaves^ and send data periodically to cloud or local IoT services using the very popular MQTT protocol. Data is serialized using JSON format, so it's very easy to parse the information on the IoT server.  Slaves variables can be processed and displayed in Ubidots dashboards. Our ModbusBox has been focused primarily to be used with VFD ( Variable Frequency Drive) but as I mention before  it can be used with any device that handles Modbus RTU. One Key fact with ModbusBox its easy to use and deploy with Ubidots, no programming  is required.

^ *At this time the device allows a maximum of four slaves , but our next firmware release would have the option for up to six slaves.*



## Requirements

* Ubidots Account
* ModbusBox
* Modbus RTU slave ^

^ *If the slave type isn’t listed, you can edit the ModbusBox manifest file and add your own device*



## Step-By-Step

1. Sample integration scheme with Ubidots

2. Hardware overview

3. Connecting ModbusBox to a Wi-Fi network

4. ModbusBox general configuration

5. ModbusBox slave configuration

6. ModbusBox Ubidots cloud configuration

   

## 1. Sample integration scheme with Ubidots



![sample-integration-scheme-with-ubidots](/media/sample-integration-scheme-with-ubidots.png)

**Figure 1**



## 2. Hardware overview

Please observe carefully the ModbusBox hardware, we recommend to print this section for a better understanding of any further explanation of the modbus usage and setup.



| Number | Name                    | Function                                                     |
| :----: | ----------------------- | ------------------------------------------------------------ |
|   1    | RJ45 Connector          | DC power input and Modbus connection                         |
|   2    | Programming Mode Button | Used to put the device in programming mode (**for developers**) |
|   3    | Setup Mode Button       | Combined with reset enters the ModbusBox in setup mode       |
|   4    | Reset Button            | Reset the ModbusBox (used combined with 2 and 3)             |
|   5    | Activity LED            | MQTT activity white LED                                      |
|   6    | Wi-Fi Module            | Wi-Fi antenna                                                |
|   7    | Status LED              | RGB pixel LED to indicate ModbusBox statuses                 |
|   8    | Dev Options             | Connectors (**for developers**)                              |
|   9    | Modbus Interface LEDs   | Indicate Modbus Tx/Rx activity                               |
|   10   | Power LED               | Green LED - indicate power presence                          |
|   11   | Power/Modbus            | Secondary power & modbus connector (**for developers**)      |

**Table 1**



![modbusbox-hardware-description](/media/modbusbox-hardware-description.png)

**Figure 2**



IOTBITS provides two different commercial model of the ModbusBox:

* MB-B1W - Supports only 1 slave
* MB-A4W - Supports up to 4 slaves

Both devices are identical from the hardware point of view. What makes them different is the the firmware  variation inside the microcontroller. Model MB-B1W supports only one slave while MB-A4W supports up to four slaves, being able to read from all of them at the time.

**Figure 3** shows the required wiring to connect ModbusBox to a cheap Eastron Energy meter. Please notice that in order to power the ModbusBox, a 12v - 24v DC power supply is required. 



![modbusbox-connect-eastron](/media/modbusbox-connect-eastron.png)

**Figure 3**



### Control Buttons

As you can see in **Figure 4**, there are three control buttons located on the PCB. These control buttons allows the user to switch between operation modes and to perform other advanced procedures.

![modbusbox-control-buttons](/media/modbusbox-control-buttons.png)

**Figure 4**



The **Setup** control button is used to put the device in **Setup Mode** and the Reset control button is used to perform a Factory Reset. 

When the ModbusBox is started with its factory configuration, there is no procedure required to enter in setup mode, in such scenario the device enters automatically in setup mode as soon it powers on. When in Setup Mode a Wi-Fi network search can take place in your Android/iOS mobile device or PC and look for SSID name **MB-B1W**  or **MB-A4W** follow by other characters that represents the unique identification of the chip as shown bellow in **Figure 5**.

![modbusbox-ap-ssid-pc](/media/modbusbox-ap-ssid-pc.png)

**Figure 5**



**Setup Mode** : Press and hold **Setup** button and then press and release **Reset** button while holding **Setup** button for  3 seconds or until status LED shown in **Figure 2** change from fading pattern to fast green, then search Wi-Fi SSID name in your phone or PC as described previously.

**Programing Mode :** This mode is only for developers that get the ModbusBox without any firmware loaded  on it and want to upload their own firmware. To enter into this mode, press and hold  **Programming** button and  quick press and release  **Reset** button. 

**Factory Reset :** To perform a factory reset, press and hold **Setup** button then quick press of Reset button, keeping pressed **Setup** button for about 10 seconds until status LED turns off and quick turn on back again with the LED fading in green color. After performing a factory reset, the ModbusBox enters automatically in **Setup Mode** and any previous configuration from the device is removed. 



### LEDs indicators

LEDs indicators on the device are very useful to quickly understand the operational status of the ModbusBox. They also helps to troubleshoot any problem with the device operation. 

The following tables shows the LEDs behaviors.



| Number in figure 2 | Name on PCB | What is does                    | Description                                                  |   Color   |
| :----------------: | :---------: | :------------------------------ | :----------------------------------------------------------- | :-------: |
|         10         |     D3      | Indicates DC input voltage      | When OFF indicates no power voltage detected                 |     🟢     |
|         5          |     D9      | Indicates MQTT activity         | It flashes every time an MQTT message is sent or received    |     ⚪     |
|         9          |     D4      | Modbus master request           | It blinks when ModbusBox try to communicate with modbus slave | &#x1F535; |
|         9          |     D8      | Modbus Response from from slave | Its blink when ModbusBox has received a response from slave  |     🔴     |

**Table 2**



#### Status LED Colors

The **Status LED**, labeled as **D12** on the PCB and marked with number 7 in **Figure 2**, is color dependent upon device statuses and alarms.

The following tables shows the color patterns of different statuses and alarms indications of the **Status LED** on the ModbusBox.

##### Status Color Patterns 

| Status                      | Animation  |   Color    | HSL Color Code |
| --------------------------- | :--------: | :--------: | :------------: |
| Setup Mode                  | Quick fade |     🟢      |      115       |
| System OK                   | Slow fade  | AQUAMARINE |      174       |
| Connecting to Wi-Fi network | Quick fade | &#x1F535;  |      240       |
| Connecting to MQTT          | Quick fade | &#x1F535;  |      240       |

**Table 3.1**



##### Alarm Color Patterns

| Status              | Animation  | Color | HSL Color Code |
| ------------------- | :--------: | :---: | :------------: |
| No Wi-Fi connection | Quick fade |   🔴   |       0        |
| No MQTT connection  | Quick fade |   🟣   |      300       |
| Modbus failure      | Quick fade |   🟠   |       60       |

**Table 3.2**



## 3. Connecting ModbusBox to a Wi-Fi network

Before going ahead with the next instructions make sure the ModbusBox is powered following the instruction on section 2.2 as is was previously described **Setup Mode** allows to do the following:

- Connect ModbusBox to the Wi-Fi
- Edit ModbusBox name
- Add and configure modbus slaves
- Check and test modbus slaves readings and functions
- Setup cloud connectivity to Ubidots
- Backup/Restore ModbusBox settings ^
- Backup/Restore modbus slaves configuration ^
- Download modbus slaves manifest ^
- Upload new or modified slave manifest

^ *Not Covered in this tutorial*



Power up ModbusBox with a suitable 12v -24v power supply following the indications on Figure 3. Make sure the **Status LED** is fading green 🟩, if it's not, probably ModbusBox had been setup before. If that's the case, proceed to press **Setup** Button while quickly press and Release reset button, wait 2 seconds until the **Status LED** starts fading green 🟩.


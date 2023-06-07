---
title: "pfSense"
description: "Instalación del servicio en pfSense de OpenVPN Server - LAN1/WAN1"
---

## Llevar a cabo los VPN Server

### Instalación del servicio en pfSense de OpenVPN Server - LAN1/WAN1

Las reglas que hicimos para el firewall en pfsense fueron las siguientes:

- Una regla en el puerto 80 que sirve para evitar hacernos lock out
- Una regla que da acceso a cualquier red LAN interna desde la red interna
- Una regla que permite el trafico TCP (Cubriendo todos los puertos con el alias internet_tcp) hacia el exterior en el lado izquierdo
- Una regla que permite el trafico UDP (Cubriendo todos los puertos con el alias internet_tcp) hacia el exterior en el lado izquierdo
- Una regla que permite el trafico ICMP hacia el exterior en el lado izquierdo
- Finalmente una regla SNMPD para el equipo de monitoreo

Lo anterior se puede ver en la siguiente imagen

![Reglas Lado Izquierdo](/left-side-rules.png)


- Activar freeRadius en pfSense para autenticación de conexiones VPNs de la red LAN1

Para esto primero hacemos login en pfSense de la red izquierda y nos vamos al area de package manager en System, pasando entonces a Available Packages.

Luego buscamos FreeRadius y presionamos instalar. Una vez terminada la instalación presionamos en la pestaña de servicios y luego en FreeRadius, en donde nos vamos a interfaces, en donde creamos un puerto de Authentication y uno de Accounting.

Posteriormente añadimos el cliente de FreeRadius y luego añadimos en User Manager (Se encuentra en el area de System) el servidor de FreeRadius como servidor de autenticacion, usando ambos puertos previamente creados para esto.

Lo que sigue es crear los usuarios que permitiremos en el area de FreeRadius. Finalmente agregamos el servicio de freeRadius a nuestro VPN Server en el area de OpenVPN, guardamos los cambios y con eso terminamos.

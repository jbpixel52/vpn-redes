---
title: "OpenVPN Server"
description: "Instalación del servicio de OpenVPN Server en Debian GNU/Linux - LAN2/WAN2"
---

### Instalación del servicio de OpenVPN Server en Debian GNU/Linux - LAN2/WAN2

- Reglas de Firewall

Las reglas que hicimos para el firewall en pfsense fueron las siguientes:

- Una regla en el puerto 80 que sirve para evitar hacernos lock out
- Una regla que da acceso a cualquier red LAN interna desde la red interna
- Una regla que da acceso a cualquier red LAN interna desde la red interna, esta incluyendo tambien redes del lado izquierdo
- Una regla que da acceso a internet de servicios DO (FTP, HTTP, HTTPS)
- Finalmente una regla SNMPD para el equipo de monitoreo

Lo anterior se puede ver en la siguiente imagen

![Reglas Lado Derecho](/right-side-rules.png)

- Activar freeRadius en pfSense para autenticación de conexiones VPNs de la red LAN1

No instalamos FreeRadius en el lado derecho ya que la VPN no fue exitosa (En el sentido de que no puede comunicarse con la VLAN derecha) en el lado derecho.

---
title: "Site-to-Site LAN2"
description: "Instalación del servicio en pfSense de VPN site-to-site usando IPSec -LAN2/WAN2"
---

### Instalación del servicio en pfSense de VPN site-to-site usando IPSec -LAN2/WAN2

- Verificación de operación bidireccional:

**Ping a cualquier computadoras de la otra red remota LAN1**

Para esto utilizamos el comando ping, e hicimos ping a la computadora 10.22.1.1 ,como se ve en la imagen

![Ping](/ping-2.png)

**Acceso al servidor Web de la otra red remota LAN1**

Debido a que el servidor estaba bajo el gateway del firewall perimetral no pudimos resolver problemas de routeo y no pudimos tener dicho acceso.

Ademas de esto, tuvimos que añadir una segunda fase para el IPSec

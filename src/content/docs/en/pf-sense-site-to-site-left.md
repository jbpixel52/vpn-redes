---
title: "Site-to-Site LAN1"
description: "Instalación del servicio en pfSense de VPN site-to-site usando IPSec -LAN1/WAN1"
---

### Instalación del servicio en pfSense de VPN site-to-site usando IPSec -LAN1/WAN1

- Verificación de operación bidireccional:

**Ping a cualquier computadoras de la otra red remota LAN2**

Para esto utilizamos el comando ping, e hicimos ping a la computadora 10.21.1.1 ,como se ve en la imagen

![Ping](/ping.png)

**Acceso a algún servicio share de cualquier equipo de la otra red remota LAN2**

No nos fue posible acceder a los servicios share debido a los problemas que tuvimos de routeo

**Acceso al servidor Web de la otra red remota LAN2**

Debido a que el servidor estaba bajo el gateway del firewall perimetral no pudimos resolver problemas de routeo y no pudimos tener dicho acceso.

Ademas de esto, tuvimos que añadir una segunda fase para el IPSec
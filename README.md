# Digitales-Veranstaltungssystem
# Structure:
## **Account**

| name | String |
| :---- | :---- |
| description | **String** |
| *profile* | ***String** (path to image)* |
| password | **String** (hashed, salted → bcrypt) |
| settings | { … } |
| access | **Number** |

**Chatroom**

| name | String |
| :---- | :---- |
| description | **String** |
| *profile* | ***String** (path to image)* |
| memberRule | (account) \=\> **Boolean** |
| messageDuration | **Number** |
| attachmentSize | **Number** |

**Message**

| chatroom | REF: Chatroom |
| :---- | :---- |
| sender | **REF: Account** |
| time | **Date** |
| content | **String** |
| flags | { edited: **Date**, deleted: **Boolean** } |
| *attachments* | *\[ … \]* |

# 

## **Event**

| name | String |
| :---- | :---- |
| description | **String** |
| time | { meet: **Date**, start: **Date**, end: **Date** } |
| shiftDuration | **Number** |

## **Scanner (data generally stored in MongoDB but only shown on active connection)**

| event | REF: Event |
| :---- | :---- |
| name | String |
| description | String |
| identifier: a number the system uniquely associates with the scanner | Number |
| mode | { general: **Enumeration**, entry: **Enumeration** } |

# 

## **Shift**

| event | REF: Event |
| :---- | :---- |
| name | **String** |
| description | **String** |
| accounts | { { start: **Date**, end: **Date**, list: **\[ REF: Account, … \]** }, … } |

## **Identity**

| event | REF: Event |
| :---- | :---- |
| identifier: a number the system uniquely associates with the identity | {  card: **Number**,  wardrobe: **Number**, } |
| inventory | { current: **\[...\]**, interferenced: **\[...\]** } |
| status: current positional status of the identity | { entry: **Number**, exit: **Number**, current: **Boolean**  } |
| account | **REF: Account** |
| analyseData | **Boolean** (normally true) |

## **Good**

| event | REF: Event |
| :---- | :---- |
| name | **String** |
| quantity | { max: **Number**, fetched: **Number**, sold: **Number**, interfered: **Number** } |
| price (per unit) | **Number** |
| cost (per unit) | **Number** |

## **Transaction**

| event | REF: Event |
| :---- | :---- |
| seller | { ref: **REF: Account**, shift: **REF: Shift** } |
| buyer | **REF: Identity** |
| time | **Date** |
| information | { total: **Number**, delta: **\[...\]** } |
| flags | { refunded: **Date**, completed: **Boolean** (normally true) } |

# 

## **LogMessage**

| event | REF: Event |
| :---- | :---- |
| time | **Date** |
| origin | **Enumeration** |
| type | **Enumeration** |
| data | { … } |

# 

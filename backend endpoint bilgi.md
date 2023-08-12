# Appizsoft v1 Dokümantasyonu

Bu dokümantasyon, Appizsoft v1 versiyonunun kullanımını açıklar.

## Genel Bilgiler

- **Base URL:** `https://api.appizsoft.com/api/v1`

## Kariyerler

Kariyerlerle ilgili işlemler. Bu işlemler JWT yetkilendirmesi gerektirir.

### Tüm Kariyerleri Getir

Tüm kariyerleri almak için kullanılır.

- **Yol:** `/careers`
- **Metod:** GET
- **Parametreler:** Yok
- **Headers:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

| Parametre        | Tür    | Zorunluluk | Açıklama              | Örnek                               |
| ---------------- | ------ | ---------- | --------------------- | ----------------------------------- |
| `id`             | int    | Zorunlu    | Kariyer id            | unique id, sistem belirler bunu     |
| `type`           | string | Zorunlu    | Kariyer tipi          | Technology,Design,Shared Services   |
| `title`          | string | Zorunlu    | Kariyer başlığı       | Kariyer için Başlık                 |
| `pageLoc`        | string | Zorunlu    | Sayfa konumu          | kariyer içn dinamik sayfa adı       |
| `description`    | string | Zorunlu    | Açıklama              | açılan pozisyon için açıklama       |
| `requirements`   | array  | Zorunlu    | Gereksinimler listesi | dizi olarak gereksinimleri belirtin |
| `location`       | string | Zorunlu    | Konum bilgisi         | "Ankara, Türkiye" veya "Uzaktan"    |
| `employmentType` | string | Zorunlu    | İstihdam tipi         | tam zamanlı yarı zamanlı gibi       |

#### İstek

#### Yanıt

```json
[
  {
    "id": "asd1132",
    "type": "Technology",
    "title": "Frontend Developer",
    "pageLoc": "frontend-developer",
    "description": "Özgün fikirlerle frontend geliştirme ekibimize katılın ve kullanıcı deneyimlerini şekillendirin. Uzaktan çalışma imkanı.",
    "requirements": [
      "En az 2 yıl frontend geliştirme deneyimi",
      "HTML, CSS ve JavaScript konularında uzmanlık",
      "Modern UI/UX tasarım prensiplerini uygulama yeteneği",
      "En az bir frontend framework'üne hakimiyet"
    ],
    "location": "Uzaktan",
    "employmentType": "Tam Zamanlı"
  }
]
```

### Yeni Kariyer Ekle

Yeni bir kariyer eklemek için kullanılır.

- **Yol:** `/careers`
- **Metod:** POST

- **Parametreler:**

| Parametre        | Tür    | Zorunluluk | Açıklama              | Örnek                               |
| ---------------- | ------ | ---------- | --------------------- | ----------------------------------- |
| `type`           | string | Zorunlu    | Kariyer tipi          | Technology,Design,Shared Services   |
| `title`          | string | Zorunlu    | Kariyer başlığı       | Kariyer için Başlık                 |
| `pageLoc`        | string | Zorunlu    | Sayfa konumu          | kariyer içn dinamik sayfa adı       |
| `description`    | string | Zorunlu    | Açıklama              | açılan pozisyon için açıklama       |
| `requirements`   | array  | Zorunlu    | Gereksinimler listesi | dizi olarak gereksinimleri belirtin |
| `location`       | string | Zorunlu    | Konum bilgisi         | "Ankara, Türkiye" veya "Uzaktan"    |
| `employmentType` | string | Zorunlu    | İstihdam tipi         | tam zamanlı yarı zamanlı gibi       |

- **Headers:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

#### İstek

```http
POST /api/v1/careers
Content-Type: application/json
Authorization: Bearer {YOUR_JWT_TOKEN}

{
  "type": "Technology",
  "title": "Frontend Developer",
  "pageLoc": "frontend-developer",
  "description": "Hızla büyüyen ekibimize katılmak için yetenekli bir frontend geliştirici arıyoruz.\nİstanbul, Türkiye konumunda.",
  "requirements": [
    "En az 2 yıl frontend geliştirme deneyimi",
    "Web teknolojilerine hakimiyet",
    "React veya Angular gibi frameworklerde tecrübe",
    "Kreatif tasarım yeteneği tercih sebebi"
  ],
  "location": "İstanbul, Türkiye",
  "employmentType": "Tam Zamanlı"
}
```

#### Yanıt

```
{
  "message": "Yeni kariyer başarıyla eklendi."
}
```

## Kariyer Güncelle

Bir kariyer verisini güncellemek için kullanılır.

- **Yol:** `/careers/:pageLoc`
- **Metod:** PUT

- **Parametreler:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

| Parametre | Tür | Zorunluluk | Açıklama                                |
| --------- | --- | ---------- | --------------------------------------- |
| `id     ` | int | Zorunlu    | Güncellenecek kariyerin benzersiz id'si |

- **Headers:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

- **İstek:**

```http
PUT /api/v1/careers/{career-id}
Content-Type: application/json
Authorization: Bearer {YOUR_JWT_TOKEN}

{
  "type": "Technology",
  "title": "Yazılım Geliştirme Uzmanı",
  "pageLoc": "{career-id}",
  "description": "Yazılım geliştirme uzmanı pozisyonu için deneyimli adaylar arıyoruz.",
  "requirements": [
    "En az 5 yıl deneyim",
    "İleri seviye programlama bilgisi",
    "Proje yönetimi yeteneği"
  ],
  "location": "İstanbul, Türkiye",
  "employmentType": "Tam Zamanlı"
}
```

#### Yanıt


```
{
"message": "Yeni kariyer başarıyla güncellendi."
}

```

## Kariyer Sil

Bir kariyer verisini güncellemek için kullanılır.

- **Yol:** `/careers/:pageLoc`
- **Metod:** DELETE

- **Parametreler:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

| Parametre | Tür | Zorunluluk | Açıklama                                |
| --------- | --- | ---------- | --------------------------------------- |
| `id     ` | int | Zorunlu    | Silinecek kariyerin benzersiz id'si |

- **Headers:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

- **İstek:**

```http
DELETE  /api/v1/careers/{career-id}
Content-Type: application/json
Authorization: Bearer {YOUR_JWT_TOKEN}

```

#### Yanıt


```
{
"message": "Yeni kariyer başarıyla silindi."
}

```
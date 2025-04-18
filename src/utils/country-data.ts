/* eslint-disable max-lines */
const countries = [
  {
    name: 'Afghanistan',
    flag: '🇦🇫',
    code: 'AF',
    dial_code: '+93',
    currency_code: 'AFN',
  },
  {
    name: 'Åland Islands',
    flag: '🇦🇽',
    code: 'AX',
    dial_code: '+358',
    currency_code: 'EUR',
  },
  {
    name: 'Albania',
    flag: '🇦🇱',
    code: 'AL',
    dial_code: '+355',
    currency_code: 'ALL',
  },
  {
    name: 'Algeria',
    flag: '🇩🇿',
    code: 'DZ',
    dial_code: '+213',
    currency_code: 'DZD',
  },
  {
    name: 'American Samoa',
    flag: '🇦🇸',
    code: 'AS',
    dial_code: '+1',
    currency_code: 'USD',
  },
  {
    name: 'Andorra',
    flag: '🇦🇩',
    code: 'AD',
    dial_code: '+376',
    currency_code: 'EUR',
  },
  {
    name: 'Angola',
    flag: '🇦🇴',
    code: 'AO',
    dial_code: '+244',
    currency_code: 'AOA',
  },
  {
    name: 'Anguilla',
    flag: '🇦🇮',
    code: 'AI',
    dial_code: '+1',
    currency_code: 'XCD',
  },
  {
    name: 'Antarctica',
    flag: '🇦🇶',
    code: 'AQ',
    dial_code: '+672',
    currency_code: 'XCD',
  },
  {
    name: 'Antigua and Barbuda',
    flag: '🇦🇬',
    code: 'AG',
    dial_code: '+1',
    currency_code: 'XCD',
  },
  {
    name: 'Argentina',
    flag: '🇦🇷',
    code: 'AR',
    dial_code: '+54',
    currency_code: 'ARS',
  },
  {
    name: 'Armenia',
    flag: '🇦🇲',
    code: 'AM',
    dial_code: '+374',
    currency_code: 'AMD',
  },
  {
    name: 'Aruba',
    flag: '🇦🇼',
    code: 'AW',
    dial_code: '+297',
    currency_code: 'AWG',
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    code: 'AU',
    dial_code: '+61',
    currency_code: 'AUD',
  },
  {
    name: 'Austria',
    flag: '🇦🇹',
    code: 'AT',
    dial_code: '+43',
    currency_code: 'EUR',
  },
  {
    name: 'Azerbaijan',
    flag: '🇦🇿',
    code: 'AZ',
    dial_code: '+994',
    currency_code: 'AZN',
  },
  {
    name: 'Bahamas',
    flag: '🇧🇸',
    code: 'BS',
    dial_code: '+1',
    currency_code: 'BSD',
  },
  {
    name: 'Bahrain',
    flag: '🇧🇭',
    code: 'BH',
    dial_code: '+973',
    currency_code: 'BHD',
  },
  {
    name: 'Bangladesh',
    flag: '🇧🇩',
    code: 'BD',
    dial_code: '+880',
    currency_code: 'BDT',
  },
  {
    name: 'Barbados',
    flag: '🇧🇧',
    code: 'BB',
    dial_code: '+1',
    currency_code: 'BBD',
  },
  {
    name: 'Belarus',
    flag: '🇧🇾',
    code: 'BY',
    dial_code: '+375',
    currency_code: 'BYR',
  },
  {
    name: 'Belgium',
    flag: '🇧🇪',
    code: 'BE',
    dial_code: '+32',
    currency_code: 'EUR',
  },
  {
    name: 'Belize',
    flag: '🇧🇿',
    code: 'BZ',
    dial_code: '+501',
    currency_code: 'BZD',
  },
  {
    name: 'Benin',
    flag: '🇧🇯',
    code: 'BJ',
    dial_code: '+229',
    currency_code: 'XOF',
  },
  {
    name: 'Bermuda',
    flag: '🇧🇲',
    code: 'BM',
    dial_code: '+1',
    currency_code: 'BMD',
  },
  {
    name: 'Bhutan',
    flag: '🇧🇹',
    code: 'BT',
    dial_code: '+975',
    currency_code: 'BTN',
  },
  {
    name: 'Bolivia, Plurinational State of bolivia',
    flag: '🇧🇴',
    code: 'BO',
    dial_code: '+591',
    currency_code: 'BOB',
  },
  {
    name: 'Bosnia and Herzegovina',
    flag: '🇧🇦',
    code: 'BA',
    dial_code: '+387',
    currency_code: 'BAM',
  },
  {
    name: 'Botswana',
    flag: '🇧🇼',
    code: 'BW',
    dial_code: '+267',
    currency_code: 'BWP',
  },
  {
    name: 'Bouvet Island',
    flag: '🇧🇻',
    code: 'BV',
    dial_code: '+47',
    currency_code: 'NOK',
  },
  {
    name: 'Brazil',
    flag: '🇧🇷',
    code: 'BR',
    dial_code: '+55',
    currency_code: 'BRL',
  },
  {
    name: 'British Indian Ocean Territory',
    flag: '🇮🇴',
    code: 'IO',
    dial_code: '+246',
    currency_code: 'USD',
  },
  {
    name: 'Brunei Darussalam',
    flag: '🇧🇳',
    code: 'BN',
    dial_code: '+673',
    currency_code: 'BND',
  },
  {
    name: 'Bulgaria',
    flag: '🇧🇬',
    code: 'BG',
    dial_code: '+359',
    currency_code: 'BGN',
  },
  {
    name: 'Burkina Faso',
    flag: '🇧🇫',
    code: 'BF',
    dial_code: '+226',
    currency_code: 'XOF',
  },
  {
    name: 'Burundi',
    flag: '🇧🇮',
    code: 'BI',
    dial_code: '+257',
    currency_code: 'BIF',
  },
  {
    name: 'Cambodia',
    flag: '🇰🇭',
    code: 'KH',
    dial_code: '+855',
    currency_code: 'KHR',
  },
  {
    name: 'Cameroon',
    flag: '🇨🇲',
    code: 'CM',
    dial_code: '+237',
    currency_code: 'XAF',
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    code: 'CA',
    dial_code: '+1',
    currency_code: 'CAD',
  },
  {
    name: 'Cape Verde',
    flag: '🇨🇻',
    code: 'CV',
    dial_code: '+238',
    currency_code: 'CVE',
  },
  {
    name: 'Cayman Islands',
    flag: '🇰🇾',
    code: 'KY',
    dial_code: '+345',
    currency_code: 'KYD',
  },
  {
    name: 'Central African Republic',
    flag: '🇨🇫',
    code: 'CF',
    dial_code: '+236',
    currency_code: 'XAF',
  },
  {
    name: 'Chad',
    flag: '🇹🇩',
    code: 'TD',
    dial_code: '+235',
    currency_code: 'XAF',
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    code: 'CL',
    dial_code: '+56',
    currency_code: 'CLP',
  },
  {
    name: 'China',
    flag: '🇨🇳',
    code: 'CN',
    dial_code: '+86',
    currency_code: 'CNY',
  },
  {
    name: 'Christmas Island',
    flag: '🇨🇽',
    code: 'CX',
    dial_code: '+61',
    currency_code: 'AUD',
  },
  {
    name: 'Cocos (Keeling) Islands',
    flag: '🇨🇨',
    code: 'CC',
    dial_code: '+61',
    currency_code: 'AUD',
  },
  {
    name: 'Colombia',
    flag: '🇨🇴',
    code: 'CO',
    dial_code: '+57',
    currency_code: 'COP',
  },
  {
    name: 'Comoros',
    flag: '🇰🇲',
    code: 'KM',
    dial_code: '+269',
    currency_code: 'KMF',
  },
  {
    name: 'Congo',
    flag: '🇨🇬',
    code: 'CG',
    dial_code: '+242',
    currency_code: 'XAF',
  },
  {
    name: 'Congo, The Democratic Republic of the Congo',
    flag: '🇨🇩',
    code: 'CD',
    dial_code: '+243',
    currency_code: 'CDF',
  },
  {
    name: 'Cook Islands',
    flag: '🇨🇰',
    code: 'CK',
    dial_code: '+682',
    currency_code: 'NZD',
  },
  {
    name: 'Costa Rica',
    flag: '🇨🇷',
    code: 'CR',
    dial_code: '+506',
    currency_code: 'CRC',
  },
  {
    name: "Cote d'Ivoire",
    flag: '🇨🇮',
    code: 'CI',
    dial_code: '+225',
    currency_code: 'XOF',
  },
  {
    name: 'Croatia',
    flag: '🇭🇷',
    code: 'HR',
    dial_code: '+385',
    currency_code: 'HRK',
  },
  {
    name: 'Cuba',
    flag: '🇨🇺',
    code: 'CU',
    dial_code: '+53',
    currency_code: 'CUP',
  },
  {
    name: 'Cyprus',
    flag: '🇨🇾',
    code: 'CY',
    dial_code: '+357',
    currency_code: 'EUR',
  },
  {
    name: 'Czech Republic',
    flag: '🇨🇿',
    code: 'CZ',
    dial_code: '+420',
    currency_code: 'CZK',
  },
  {
    name: 'Denmark',
    flag: '🇩🇰',
    code: 'DK',
    dial_code: '+45',
    currency_code: 'DKK',
  },
  {
    name: 'Djibouti',
    flag: '🇩🇯',
    code: 'DJ',
    dial_code: '+253',
    currency_code: 'DJF',
  },
  {
    name: 'Dominica',
    flag: '🇩🇲',
    code: 'DM',
    dial_code: '+1',
    currency_code: 'XCD',
  },
  {
    name: 'Dominican Republic',
    flag: '🇩🇴',
    code: 'DO',
    dial_code: '+1',
    currency_code: 'DOP',
  },
  {
    name: 'Ecuador',
    flag: '🇪🇨',
    code: 'EC',
    dial_code: '+593',
    currency_code: 'ECS',
  },
  {
    name: 'Egypt',
    flag: '🇪🇬',
    code: 'EG',
    dial_code: '+20',
    currency_code: 'EGP',
  },
  {
    name: 'El Salvador',
    flag: '🇸🇻',
    code: 'SV',
    dial_code: '+503',
    currency_code: 'SVC',
  },
  {
    name: 'Equatorial Guinea',
    flag: '🇬🇶',
    code: 'GQ',
    dial_code: '+240',
    currency_code: 'XAF',
  },
  {
    name: 'Eritrea',
    flag: '🇪🇷',
    code: 'ER',
    dial_code: '+291',
    currency_code: 'ERN',
  },
  {
    name: 'Estonia',
    flag: '🇪🇪',
    code: 'EE',
    dial_code: '+372',
    currency_code: 'EUR',
  },
  {
    name: 'Ethiopia',
    flag: '🇪🇹',
    code: 'ET',
    dial_code: '+251',
    currency_code: 'ETB',
  },
  {
    name: 'Falkland Islands (Malvinas)',
    flag: '🇫🇰',
    code: 'FK',
    dial_code: '+500',
    currency_code: 'FKP',
  },
  {
    name: 'Faroe Islands',
    flag: '🇫🇴',
    code: 'FO',
    dial_code: '+298',
    currency_code: 'DKK',
  },
  {
    name: 'Fiji',
    flag: '🇫🇯',
    code: 'FJ',
    dial_code: '+679',
    currency_code: 'FJD',
  },
  {
    name: 'Finland',
    flag: '🇫🇮',
    code: 'FI',
    dial_code: '+358',
    currency_code: 'EUR',
  },
  {
    name: 'France',
    flag: '🇫🇷',
    code: 'FR',
    dial_code: '+33',
    currency_code: 'EUR',
  },
  {
    name: 'French Guiana',
    flag: '🇬🇫',
    code: 'GF',
    dial_code: '+594',
    currency_code: 'EUR',
  },
  {
    name: 'French Polynesia',
    flag: '🇵🇫',
    code: 'PF',
    dial_code: '+689',
    currency_code: 'XPF',
  },
  {
    name: 'French Southern Territories',
    flag: '🇹🇫',
    code: 'TF',
    dial_code: '+262',
    currency_code: 'EUR',
  },
  {
    name: 'Gabon',
    flag: '🇬🇦',
    code: 'GA',
    dial_code: '+241',
    currency_code: 'XAF',
  },
  {
    name: 'Gambia',
    flag: '🇬🇲',
    code: 'GM',
    dial_code: '+220',
    currency_code: 'GMD',
  },
  {
    name: 'Georgia',
    flag: '🇬🇪',
    code: 'GE',
    dial_code: '+995',
    currency_code: 'GEL',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    code: 'DE',
    dial_code: '+49',
    currency_code: 'EUR',
  },
  {
    name: 'Ghana',
    flag: '🇬🇭',
    code: 'GH',
    dial_code: '+233',
    currency_code: 'GHS',
  },
  {
    name: 'Gibraltar',
    flag: '🇬🇮',
    code: 'GI',
    dial_code: '+350',
    currency_code: 'GIP',
  },
  {
    name: 'Greece',
    flag: '🇬🇷',
    code: 'GR',
    dial_code: '+30',
    currency_code: 'EUR',
  },
  {
    name: 'Greenland',
    flag: '🇬🇱',
    code: 'GL',
    dial_code: '+299',
    currency_code: 'DKK',
  },
  {
    name: 'Grenada',
    flag: '🇬🇩',
    code: 'GD',
    dial_code: '+1',
    currency_code: 'XCD',
  },
  {
    name: 'Guadeloupe',
    flag: '🇬🇵',
    code: 'GP',
    dial_code: '+590',
    currency_code: 'EUR',
  },
  {
    name: 'Guam',
    flag: '🇬🇺',
    code: 'GU',
    dial_code: '+1',
    currency_code: 'USD',
  },
  {
    name: 'Guatemala',
    flag: '🇬🇹',
    code: 'GT',
    dial_code: '+502',
    currency_code: 'QTQ',
  },
  {
    name: 'Guernsey',
    flag: '🇬🇬',
    code: 'GG',
    dial_code: '+44',
    currency_code: 'GGP',
  },
  {
    name: 'Guinea',
    flag: '🇬🇳',
    code: 'GN',
    dial_code: '+224',
    currency_code: 'GNF',
  },
  {
    name: 'Guinea-Bissau',
    flag: '🇬🇼',
    code: 'GW',
    dial_code: '+245',
    currency_code: 'CFA',
  },
  {
    name: 'Guyana',
    flag: '🇬🇾',
    code: 'GY',
    dial_code: '+592',
    currency_code: 'GYD',
  },
  {
    name: 'Haiti',
    flag: '🇭🇹',
    code: 'HT',
    dial_code: '+509',
    currency_code: 'HTG',
  },
  {
    name: 'Heard Island and Mcdonald Islands',
    flag: '🇭🇲',
    code: 'HM',
    dial_code: '+672',
    currency_code: 'AUD',
  },
  {
    name: 'Holy See (Vatican City State)',
    flag: '🇻🇦',
    code: 'VA',
    dial_code: '+379',
    currency_code: 'EUR',
  },
  {
    name: 'Honduras',
    flag: '🇭🇳',
    code: 'HN',
    dial_code: '+504',
    currency_code: 'HNL',
  },
  {
    name: 'Hong Kong',
    flag: '🇭🇰',
    code: 'HK',
    dial_code: '+852',
    currency_code: 'HKD',
  },
  {
    name: 'Hungary',
    flag: '🇭🇺',
    code: 'HU',
    dial_code: '+36',
    currency_code: 'HUF',
  },
  {
    name: 'Iceland',
    flag: '🇮🇸',
    code: 'IS',
    dial_code: '+354',
    currency_code: 'ISK',
  },
  {
    name: 'India',
    flag: '🇮🇳',
    code: 'IN',
    dial_code: '+91',
    currency_code: 'INR',
  },
  {
    name: 'Indonesia',
    flag: '🇮🇩',
    code: 'ID',
    dial_code: '+62',
    currency_code: 'IDR',
  },
  {
    name: 'Iran, Islamic Republic of Persian Gulf',
    flag: '🇮🇷',
    code: 'IR',
    dial_code: '+98',
    currency_code: 'IRR',
  },
  {
    name: 'Iraq',
    flag: '🇮🇶',
    code: 'IQ',
    dial_code: '+964',
    currency_code: 'IQD',
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    code: 'IE',
    dial_code: '+353',
    currency_code: 'EUR',
  },
  {
    name: 'Isle of Man',
    flag: '🇮🇲',
    code: 'IM',
    dial_code: '+44',
    currency_code: 'IMP',
  },
  {
    name: 'Israel',
    flag: '🇮🇱',
    code: 'IL',
    dial_code: '+972',
    currency_code: 'ILS',
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    code: 'IT',
    dial_code: '+39',
    currency_code: 'EUR',
  },
  {
    name: 'Jamaica',
    flag: '🇯🇲',
    code: 'JM',
    dial_code: '+1',
    currency_code: 'JMD',
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    code: 'JP',
    dial_code: '+81',
    currency_code: 'JPY',
  },
  {
    name: 'Jersey',
    flag: '🇯🇪',
    code: 'JE',
    dial_code: '+44',
    currency_code: 'JEP',
  },
  {
    name: 'Jordan',
    flag: '🇯🇴',
    code: 'JO',
    dial_code: '+962',
    currency_code: 'JOD',
  },
  {
    name: 'Kazakhstan',
    flag: '🇰🇿',
    code: 'KZ',
    dial_code: '+7',
    currency_code: 'KZT',
  },
  {
    name: 'Kenya',
    flag: '🇰🇪',
    code: 'KE',
    dial_code: '+254',
    currency_code: 'KES',
  },
  {
    name: 'Kiribati',
    flag: '🇰🇮',
    code: 'KI',
    dial_code: '+686',
    currency_code: 'AUD',
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    flag: '🇰🇵',
    code: 'KP',
    dial_code: '+850',
    currency_code: 'KPW',
  },
  {
    name: 'Korea, Republic of South Korea',
    flag: '🇰🇷',
    code: 'KR',
    dial_code: '+82',
    currency_code: 'KRW',
  },
  {
    name: 'Kosovo',
    flag: '🇽🇰',
    code: 'XK',
    dial_code: '+383',
    currency_code: 'EUR',
  },
  {
    name: 'Kuwait',
    flag: '🇰🇼',
    code: 'KW',
    dial_code: '+965',
    currency_code: 'KWD',
  },
  {
    name: 'Kyrgyzstan',
    flag: '🇰🇬',
    code: 'KG',
    dial_code: '+996',
    currency_code: 'KGS',
  },
  {
    name: 'Laos',
    flag: '🇱🇦',
    code: 'LA',
    dial_code: '+856',
    currency_code: 'LAK',
  },
  {
    name: 'Latvia',
    flag: '🇱🇻',
    code: 'LV',
    dial_code: '+371',
    currency_code: 'LVL',
  },
  {
    name: 'Lebanon',
    flag: '🇱🇧',
    code: 'LB',
    dial_code: '+961',
    currency_code: 'LBP',
  },
  {
    name: 'Lesotho',
    flag: '🇱🇸',
    code: 'LS',
    dial_code: '+266',
    currency_code: 'LSL',
  },
  {
    name: 'Liberia',
    flag: '🇱🇷',
    code: 'LR',
    dial_code: '+231',
    currency_code: 'LRD',
  },
  {
    name: 'Libyan Arab Jamahiriya',
    flag: '🇱🇾',
    code: 'LY',
    dial_code: '+218',
    currency_code: 'LYD',
  },
  {
    name: 'Liechtenstein',
    flag: '🇱🇮',
    code: 'LI',
    dial_code: '+423',
    currency_code: 'CHF',
  },
  {
    name: 'Lithuania',
    flag: '🇱🇹',
    code: 'LT',
    dial_code: '+370',
    currency_code: 'LTL',
  },
  {
    name: 'Luxembourg',
    flag: '🇱🇺',
    code: 'LU',
    dial_code: '+352',
    currency_code: 'EUR',
  },
  {
    name: 'Macao',
    flag: '🇲🇴',
    code: 'MO',
    dial_code: '+853',
    currency_code: 'MOP',
  },
  {
    name: 'Macedonia',
    flag: '🇲🇰',
    code: 'MK',
    dial_code: '+389',
    currency_code: 'MKD',
  },
  {
    name: 'Madagascar',
    flag: '🇲🇬',
    code: 'MG',
    dial_code: '+261',
    currency_code: 'MGF',
  },
  {
    name: 'Malawi',
    flag: '🇲🇼',
    code: 'MW',
    dial_code: '+265',
    currency_code: 'MWK',
  },
  {
    name: 'Malaysia',
    flag: '🇲🇾',
    code: 'MY',
    dial_code: '+60',
    currency_code: 'MYR',
  },
  {
    name: 'Maldives',
    flag: '🇲🇻',
    code: 'MV',
    dial_code: '+960',
    currency_code: 'MVR',
  },
  {
    name: 'Mali',
    flag: '🇲🇱',
    code: 'ML',
    dial_code: '+223',
    currency_code: 'XOF',
  },
  {
    name: 'Malta',
    flag: '🇲🇹',
    code: 'MT',
    dial_code: '+356',
    currency_code: 'EUR',
  },
  {
    name: 'Marshall Islands',
    flag: '🇲🇭',
    code: 'MH',
    dial_code: '+692',
    currency_code: 'USD',
  },
  {
    name: 'Martinique',
    flag: '🇲🇶',
    code: 'MQ',
    dial_code: '+596',
    currency_code: 'EUR',
  },
  {
    name: 'Mauritania',
    flag: '🇲🇷',
    code: 'MR',
    dial_code: '+222',
    currency_code: 'MRO',
  },
  {
    name: 'Mauritius',
    flag: '🇲🇺',
    code: 'MU',
    dial_code: '+230',
    currency_code: 'MUR',
  },
  {
    name: 'Mayotte',
    flag: '🇾🇹',
    code: 'YT',
    dial_code: '+262',
    currency_code: 'EUR',
  },
  {
    name: 'Mexico',
    flag: '🇲🇽',
    code: 'MX',
    dial_code: '+52',
    currency_code: 'MXN',
  },
  {
    name: 'Micronesia, Federated States of Micronesia',
    flag: '🇫🇲',
    code: 'FM',
    dial_code: '+691',
    currency_code: 'USD',
  },
  {
    name: 'Moldova',
    flag: '🇲🇩',
    code: 'MD',
    dial_code: '+373',
    currency_code: 'MDL',
  },
  {
    name: 'Monaco',
    flag: '🇲🇨',
    code: 'MC',
    dial_code: '+377',
    currency_code: 'EUR',
  },
  {
    name: 'Mongolia',
    flag: '🇲🇳',
    code: 'MN',
    dial_code: '+976',
    currency_code: 'MNT',
  },
  {
    name: 'Montenegro',
    flag: '🇲🇪',
    code: 'ME',
    dial_code: '+382',
    currency_code: 'EUR',
  },
  {
    name: 'Montserrat',
    flag: '🇲🇸',
    code: 'MS',
    dial_code: '+1',
    currency_code: 'XCD',
  },
  {
    name: 'Morocco',
    flag: '🇲🇦',
    code: 'MA',
    dial_code: '+212',
    currency_code: 'MAD',
  },
  {
    name: 'Mozambique',
    flag: '🇲🇿',
    code: 'MZ',
    dial_code: '+258',
    currency_code: 'MZN',
  },
  {
    name: 'Myanmar',
    flag: '🇲🇲',
    code: 'MM',
    dial_code: '+95',
    currency_code: 'MMR',
  },
  {
    name: 'Namibia',
    flag: '🇳🇦',
    code: 'NA',
    dial_code: '+264',
    currency_code: 'NAD',
  },
  {
    name: 'Nauru',
    flag: '🇳🇷',
    code: 'NR',
    dial_code: '+674',
    currency_code: 'AUD',
  },
  {
    name: 'Nepal',
    flag: '🇳🇵',
    code: 'NP',
    dial_code: '+977',
    currency_code: 'NPR',
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    code: 'NL',
    dial_code: '+31',
    currency_code: 'EUR',
  },
  {
    name: 'Netherlands Antilles',
    flag: '',
    code: 'AN',
    dial_code: '+599',
    currency_code: 'ANG',
  },
  {
    name: 'New Caledonia',
    flag: '🇳🇨',
    code: 'NC',
    dial_code: '+687',
    currency_code: 'XPF',
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    code: 'NZ',
    dial_code: '+64',
    currency_code: 'NZD',
  },
  {
    name: 'Nicaragua',
    flag: '🇳🇮',
    code: 'NI',
    dial_code: '+505',
    currency_code: 'NIO',
  },
  {
    name: 'Niger',
    flag: '🇳🇪',
    code: 'NE',
    dial_code: '+227',
    currency_code: 'XOF',
  },
  {
    name: 'Nigeria',
    flag: '🇳🇬',
    code: 'NG',
    dial_code: '+234',
    currency_code: 'NGN',
  },
  {
    name: 'Niue',
    flag: '🇳🇺',
    code: 'NU',
    dial_code: '+683',
    currency_code: 'NZD',
  },
  {
    name: 'Norfolk Island',
    flag: '🇳🇫',
    code: 'NF',
    dial_code: '+672',
    currency_code: 'AUD',
  },
  {
    name: 'Northern Mariana Islands',
    flag: '🇲🇵',
    code: 'MP',
    dial_code: '+1',
    currency_code: 'USD',
  },
  {
    name: 'Norway',
    flag: '🇳🇴',
    code: 'NO',
    dial_code: '+47',
    currency_code: 'NOK',
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    code: 'OM',
    dial_code: '+968',
    currency_code: 'OMR',
  },
  {
    name: 'Pakistan',
    flag: '🇵🇰',
    code: 'PK',
    dial_code: '+92',
    currency_code: 'PKR',
  },
  {
    name: 'Palau',
    flag: '🇵🇼',
    code: 'PW',
    dial_code: '+680',
    currency_code: 'USD',
  },
  {
    name: 'Palestinian Territory, Occupied',
    flag: '🇵🇸',
    code: 'PS',
    dial_code: '+970',
    currency_code: 'EGP',
  },
  {
    name: 'Panama',
    flag: '🇵🇦',
    code: 'PA',
    dial_code: '+507',
    currency_code: 'PAB',
  },
  {
    name: 'Papua New Guinea',
    flag: '🇵🇬',
    code: 'PG',
    dial_code: '+675',
    currency_code: 'PGK',
  },
  {
    name: 'Paraguay',
    flag: '🇵🇾',
    code: 'PY',
    dial_code: '+595',
    currency_code: 'PYG',
  },
  {
    name: 'Peru',
    flag: '🇵🇪',
    code: 'PE',
    dial_code: '+51',
    currency_code: 'PEN',
  },
  {
    name: 'Philippines',
    flag: '🇵🇭',
    code: 'PH',
    dial_code: '+63',
    currency_code: 'PHP',
  },
  {
    name: 'Pitcairn',
    flag: '🇵🇳',
    code: 'PN',
    dial_code: '+64',
    currency_code: 'NZD',
  },
  {
    name: 'Poland',
    flag: '🇵🇱',
    code: 'PL',
    dial_code: '+48',
    currency_code: 'PLN',
  },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    code: 'PT',
    dial_code: '+351',
    currency_code: 'EUR',
  },
  {
    name: 'Puerto Rico',
    flag: '🇵🇷',
    code: 'PR',
    dial_code: '+1',
    currency_code: 'USD',
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    code: 'QA',
    dial_code: '+974',
    currency_code: 'QAR',
  },
  {
    name: 'Romania',
    flag: '🇷🇴',
    code: 'RO',
    dial_code: '+40',
    currency_code: 'RON',
  },
  {
    name: 'Russia',
    flag: '🇷🇺',
    code: 'RU',
    dial_code: '+7',
    currency_code: 'RUB',
  },
  {
    name: 'Rwanda',
    flag: '🇷🇼',
    code: 'RW',
    dial_code: '+250',
    currency_code: 'RWF',
  },
  {
    name: 'Reunion',
    flag: '🇷🇪',
    code: 'RE',
    dial_code: '+262',
    currency_code: 'EUR',
  },
  {
    name: 'Saint Barthelemy',
    flag: '🇧🇱',
    code: 'BL',
    dial_code: '+590',
    currency_code: 'EUR',
  },
  {
    name: 'Saint Helena, Ascension and Tristan Da Cunha',
    flag: '🇸🇭',
    code: 'SH',
    dial_code: '+290',
    currency_code: 'SHP',
  },
  {
    name: 'Saint Kitts and Nevis',
    flag: '🇰🇳',
    code: 'KN',
    dial_code: '+1',
    currency_code: 'XCD',
  },
  {
    name: 'Saint Lucia',
    flag: '🇱🇨',
    code: 'LC',
    dial_code: '+1',
    currency_code: 'XCD',
  },
  {
    name: 'Saint Martin',
    flag: '🇲🇫',
    code: 'MF',
    dial_code: '+590',
    currency_code: 'EUR',
  },
  {
    name: 'Saint Pierre and Miquelon',
    flag: '🇵🇲',
    code: 'PM',
    dial_code: '+508',
    currency_code: 'EUR',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    flag: '🇻🇨',
    code: 'VC',
    dial_code: '+1',
    currency_code: 'XCD',
  },
  {
    name: 'Samoa',
    flag: '🇼🇸',
    code: 'WS',
    dial_code: '+685',
    currency_code: 'WST',
  },
  {
    name: 'San Marino',
    flag: '🇸🇲',
    code: 'SM',
    dial_code: '+378',
    currency_code: 'EUR',
  },
  {
    name: 'Sao Tome and Principe',
    flag: '🇸🇹',
    code: 'ST',
    dial_code: '+239',
    currency_code: 'STD',
  },
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    code: 'SA',
    dial_code: '+966',
    currency_code: 'SAR',
  },
  {
    name: 'Senegal',
    flag: '🇸🇳',
    code: 'SN',
    dial_code: '+221',
    currency_code: 'XOF',
  },
  {
    name: 'Serbia',
    flag: '🇷🇸',
    code: 'RS',
    dial_code: '+381',
    currency_code: 'RSD',
  },
  {
    name: 'Seychelles',
    flag: '🇸🇨',
    code: 'SC',
    dial_code: '+248',
    currency_code: 'SCR',
  },
  {
    name: 'Sierra Leone',
    flag: '🇸🇱',
    code: 'SL',
    dial_code: '+232',
    currency_code: 'SLL',
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    code: 'SG',
    dial_code: '+65',
    currency_code: 'SGD',
  },
  {
    name: 'Slovakia',
    flag: '🇸🇰',
    code: 'SK',
    dial_code: '+421',
    currency_code: 'EUR',
  },
  {
    name: 'Slovenia',
    flag: '🇸🇮',
    code: 'SI',
    dial_code: '+386',
    currency_code: 'EUR',
  },
  {
    name: 'Solomon Islands',
    flag: '🇸🇧',
    code: 'SB',
    dial_code: '+677',
    currency_code: 'SBD',
  },
  {
    name: 'Somalia',
    flag: '🇸🇴',
    code: 'SO',
    dial_code: '+252',
    currency_code: 'SOS',
  },
  {
    name: 'South Africa',
    flag: '🇿🇦',
    code: 'ZA',
    dial_code: '+27',
    currency_code: 'ZAR',
  },
  {
    name: 'South Sudan',
    flag: '🇸🇸',
    code: 'SS',
    dial_code: '+211',
    currency_code: 'SSP',
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    flag: '🇬🇸',
    code: 'GS',
    dial_code: '+500',
    currency_code: 'GBP',
  },
  {
    name: 'Spain',
    flag: '🇪🇸',
    code: 'ES',
    dial_code: '+34',
    currency_code: 'EUR',
  },
  {
    name: 'Sri Lanka',
    flag: '🇱🇰',
    code: 'LK',
    dial_code: '+94',
    currency_code: 'LKR',
  },
  {
    name: 'Sudan',
    flag: '🇸🇩',
    code: 'SD',
    dial_code: '+249',
    currency_code: 'SDG',
  },
  {
    name: 'Suriname',
    flag: '🇸🇷',
    code: 'SR',
    dial_code: '+597',
    currency_code: 'SRD',
  },
  {
    name: 'Svalbard and Jan Mayen',
    flag: '🇸🇯',
    code: 'SJ',
    dial_code: '+47',
    currency_code: 'NOK',
  },
  {
    name: 'Swaziland',
    flag: '🇸🇿',
    code: 'SZ',
    dial_code: '+268',
    currency_code: 'SZL',
  },
  {
    name: 'Sweden',
    flag: '🇸🇪',
    code: 'SE',
    dial_code: '+46',
    currency_code: 'SEK',
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    code: 'CH',
    dial_code: '+41',
    currency_code: 'CHF',
  },
  {
    name: 'Syrian Arab Republic',
    flag: '🇸🇾',
    code: 'SY',
    dial_code: '+963',
    currency_code: 'SYP',
  },
  {
    name: 'Taiwan',
    flag: '🇹🇼',
    code: 'TW',
    dial_code: '+886',
    currency_code: 'TWD',
  },
  {
    name: 'Tajikistan',
    flag: '🇹🇯',
    code: 'TJ',
    dial_code: '+992',
    currency_code: 'TJS',
  },
  {
    name: 'Tanzania, United Republic of Tanzania',
    flag: '🇹🇿',
    code: 'TZ',
    dial_code: '+255',
    currency_code: 'TZS',
  },
  {
    name: 'Thailand',
    flag: '🇹🇭',
    code: 'TH',
    dial_code: '+66',
    currency_code: 'THB',
  },
  {
    name: 'Timor-Leste',
    flag: '🇹🇱',
    code: 'TL',
    dial_code: '+670',
    currency_code: 'USD',
  },
  {
    name: 'Togo',
    flag: '🇹🇬',
    code: 'TG',
    dial_code: '+228',
    currency_code: 'XOF',
  },
  {
    name: 'Tokelau',
    flag: '🇹🇰',
    code: 'TK',
    dial_code: '+690',
    currency_code: 'NZD',
  },
  {
    name: 'Tonga',
    flag: '🇹🇴',
    code: 'TO',
    dial_code: '+676',
    currency_code: 'TOP',
  },
  {
    name: 'Trinidad and Tobago',
    flag: '🇹🇹',
    code: 'TT',
    dial_code: '+1',
    currency_code: 'TTD',
  },
  {
    name: 'Tunisia',
    flag: '🇹🇳',
    code: 'TN',
    dial_code: '+216',
    currency_code: 'TND',
  },
  {
    name: 'Turkey',
    flag: '🇹🇷',
    code: 'TR',
    dial_code: '+90',
    currency_code: 'TRY',
  },
  {
    name: 'Turkmenistan',
    flag: '🇹🇲',
    code: 'TM',
    dial_code: '+993',
    currency_code: 'TMT',
  },
  {
    name: 'Turks and Caicos Islands',
    flag: '🇹🇨',
    code: 'TC',
    dial_code: '+1',
    currency_code: 'USD',
  },
  {
    name: 'Tuvalu',
    flag: '🇹🇻',
    code: 'TV',
    dial_code: '+688',
    currency_code: 'AUD',
  },
  {
    name: 'Uganda',
    flag: '🇺🇬',
    code: 'UG',
    dial_code: '+256',
    currency_code: 'UGX',
  },
  {
    name: 'Ukraine',
    flag: '🇺🇦',
    code: 'UA',
    dial_code: '+380',
    currency_code: 'UAH',
  },
  {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    code: 'AE',
    dial_code: '+971',
    currency_code: 'AED',
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    code: 'GB',
    dial_code: '+44',
    currency_code: 'GBP',
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    code: 'US',
    dial_code: '+1',
    currency_code: 'USD',
  },
  {
    name: 'Uruguay',
    flag: '🇺🇾',
    code: 'UY',
    dial_code: '+598',
    currency_code: 'UYU',
  },
  {
    name: 'Uzbekistan',
    flag: '🇺🇿',
    code: 'UZ',
    dial_code: '+998',
    currency_code: 'UZS',
  },
  {
    name: 'Vanuatu',
    flag: '🇻🇺',
    code: 'VU',
    dial_code: '+678',
    currency_code: 'VUV',
  },
  {
    name: 'Venezuela, Bolivarian Republic of Venezuela',
    flag: '🇻🇪',
    code: 'VE',
    dial_code: '+58',
    currency_code: 'VEB',
  },
  {
    name: 'Vietnam',
    flag: '🇻🇳',
    code: 'VN',
    dial_code: '+84',
    currency_code: 'VND',
  },
  {
    name: 'Virgin Islands, British',
    flag: '🇻🇬',
    code: 'VG',
    dial_code: '+1',
    currency_code: 'USD',
  },
  {
    name: 'Virgin Islands, U.S.',
    flag: '🇻🇮',
    code: 'VI',
    dial_code: '+1',
    currency_code: 'USD',
  },
  {
    name: 'Wallis and Futuna',
    flag: '🇼🇫',
    code: 'WF',
    dial_code: '+681',
    currency_code: 'XPF',
  },
  {
    name: 'Yemen',
    flag: '🇾🇪',
    code: 'YE',
    dial_code: '+967',
    currency_code: 'YER',
  },
  {
    name: 'Zambia',
    flag: '🇿🇲',
    code: 'ZM',
    dial_code: '+260',
    currency_code: 'ZMW',
  },
  {
    name: 'Zimbabwe',
    flag: '🇿🇼',
    code: 'ZW',
    dial_code: '+263',
    currency_code: 'ZWD',
  },
];

export default countries;

export const baseCountries = [
  {
    name: 'United States',
    flag: '🇺🇸',
    code: 'US',
    dial_code: '+1',
    currency_code: 'USD',
  },
];

export const quoteCountries = [
  {
    name: 'Mexico',
    flag: '🇲🇽',
    code: 'MX',
    dial_code: '+52',
    currency_code: 'MXN',
  },
  {
    name: 'Nigeria',
    flag: '🇳🇬',
    code: 'NG',
    dial_code: '+234',
    currency_code: 'NGN',
  },
];

// Intl Constructors
// Definition:
// Provides language-sensitive string comparison, number formatting, and date/time formatting.

// Detailed Explanation:

// javascript
// Number formatting
const numberFormat = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});
numberFormat.format(123456.789); // "123.456,79 €"

// Date formatting
const dateFormat = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'long'
});
dateFormat.format(new Date());
// Components:

// Intl.NumberFormat - Number formatting

// Intl.DateTimeFormat - Date/time formatting

// Intl.Collator - String comparison

// Intl.PluralRules - Plural-sensitive formatting

// Features:

// Locale-specific formatting

// Customizable options

// Performance optimized

// Use Cases:

// Internationalization (i18n)

// Localization (l10n)

// Displaying culturally appropriate formats
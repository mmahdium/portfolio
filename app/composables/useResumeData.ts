/**
 * Resume Data Composable
 * Provides reactive access to resume data and helper functions
 */

import { computed } from 'vue'
import { resumeData } from '~/data/resume.en'

export function useResumeData() {
  // Reactive reference to resume data
  const resume = computed(() => resumeData)

  function getCurrentMonthYearTag(): string {
    const now = new Date()
    const year = now.getFullYear()
    const monthName = now.toLocaleString('en-US', { month: 'long' })
    return `${monthName.replace(/\s+/g, '')}_${year}`
  }

  /**
   * Format YYYY-MM date string to readable format
   * @param date - Date string in YYYY-MM format (e.g., "2023-01")
   * @param locale - Locale for formatting (default: 'en')
   * @returns Formatted date string (e.g., "Jan 2023")
   */
  function formatDate(date: string, locale: string = 'en'): string {
    if (!date) return ''
    
    const [year, month] = date.split('-')
    const dateObj = new Date(Number(year), Number(month) - 1)
    
    const monthName = dateObj.toLocaleDateString(locale, { month: 'short' })
    return `${monthName} ${year}`
  }

  /**
   * Get full name from resume data
   * @returns Full name
   */
  function getFullName(): string {
    return resumeData.basics.name
  }

  /**
   * Generate PDF filename from resume data
   * Best practice: include a stable date tag so recipients can distinguish versions.
   * @returns Filename in format "FirstName_LastName_Resume_December_2025.pdf"
   */
  function getPdfFilename(): string {
    const name = resumeData.basics.name
    const filename = name.replace(/\s+/g, '_')
    return `${filename}_Resume_${getCurrentMonthYearTag()}.pdf`
  }

  return {
    resume,
    formatDate,
    getFullName,
    getPdfFilename,
  }
}

export const RESEARCH_ICONS = {
  'computer-science': {
    path: 'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12H3V5.25',
    title: 'Digital Twin'
  },
  'engineering': {
    path: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z',
    title: 'Engineering'
  },
  'plm': {
    path: [
      // Server body (top)
      'M4 2h16s2 0 2 2v4s0 2-2 2H4s-2 0-2-2V4s0-2 2-2',
      // Server body (bottom)
      'M4 14h16s2 0 2 2v4s0 2-2 2H4s-2 0-2-2v-4s0-2 2-2',
      // Indicator dots (converted to paths)
      'M6 6h0.01',  // Top dot
      'M6 18h0.01'  // Bottom dot
    ].join(' '),
    title: 'PLM'
  },
  'digital-twin': {
    path: [
      // Outer square (converted from <rect> to path)
      'M3 3h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
      // digital-twin graph line
      'M17 12h-2l-2 5-2-10-2 5H7'
    ].join(' '),
    title: 'Digital Twin'
  }
} as const;


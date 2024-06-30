import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/', request.url))
}

export default middleware

export const config = {
  matcher: ['/todos'],
}

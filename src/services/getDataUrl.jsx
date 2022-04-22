import React from 'react'
import axios from 'axios'

export async function getDataUrl(url) {
  const { data } = await axios.get(url)
  return data
} 
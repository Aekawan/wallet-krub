import React from 'react'
import styled from 'styled-components'

export const H1 = ({ children }) => (
  <h1 className="title is-1">{children}</h1>
)

export const H2 = ({ children }) => (
  <h2>{children}</h2>
)

export const H3 = ({ children }) => (
  <h3 className="title is-3">{children}</h3>
)

export const H4 = ({ children }) => (
  <h4 className="title is-4">{children}</h4>
)

export const H5 = ({ children }) => (
  <h5 className="title is-5">{children}</h5>
)

export const H6 = ({ children }) => (
  <h6 className="title is-6">{children}</h6>
)
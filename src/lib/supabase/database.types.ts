export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Preferences: {
        Row: {
          createdAt: string
          id: number
          music: string[] | null
          updatedAt: string
          userId: number
        }
        Insert: {
          createdAt?: string
          id?: number
          music?: string[] | null
          updatedAt: string
          userId: number
        }
        Update: {
          createdAt?: string
          id?: number
          music?: string[] | null
          updatedAt?: string
          userId?: number
        }
      }
      Users: {
        Row: {
          email: string
          googleId: string
          id: number
          name: string | null
          picture: string
          type: string | null
        }
        Insert: {
          email: string
          googleId: string
          id?: number
          name?: string | null
          picture: string
          type?: string | null
        }
        Update: {
          email?: string
          googleId?: string
          id?: number
          name?: string | null
          picture?: string
          type?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

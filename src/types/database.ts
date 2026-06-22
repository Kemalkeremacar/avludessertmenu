export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      cafe_info: {
        Row: {
          id: number;
          name: string;
          tagline_tr: string;
          tagline_en: string;
          hours_tr: string | null;
          hours_en: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          tagline_tr: string;
          tagline_en: string;
          hours_tr?: string | null;
          hours_en?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          tagline_tr?: string;
          tagline_en?: string;
          hours_tr?: string | null;
          hours_en?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      categories: {
        Row: {
          id: string;
          label_tr: string;
          label_en: string;
          description_tr: string | null;
          description_en: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id: string;
          label_tr: string;
          label_en: string;
          description_tr?: string | null;
          description_en?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          label_tr?: string;
          label_en?: string;
          description_tr?: string | null;
          description_en?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      menu_items: {
        Row: {
          id: string;
          name_tr: string;
          name_en: string;
          description_tr: string;
          description_en: string;
          price: string;
          category_id: string;
          image: string | null;
          tags: string[] | null;
          is_popular: boolean;
          is_available: boolean;
          created_at: string;
        };
        Insert: {
          id: string;
          name_tr: string;
          name_en: string;
          description_tr: string;
          description_en: string;
          price: string;
          category_id: string;
          image?: string | null;
          tags?: string[] | null;
          is_popular?: boolean;
          is_available?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name_tr?: string;
          name_en?: string;
          description_tr?: string;
          description_en?: string;
          price?: string;
          category_id?: string;
          image?: string | null;
          tags?: string[] | null;
          is_popular?: boolean;
          is_available?: boolean;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "menu_items_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

-- ============================================================
-- SCRIPT DE CRÉATION DE BASE DE DONNÉES SUPABASE (POSTGRESQL)
-- Projet: La Jacaranda (Gestion de Résidence & Syndic)
-- ============================================================

-- 1. TABLE USERS (Résidents & Membres du Syndic)
CREATE TABLE IF NOT EXISTS public.users (
    apartment_code VARCHAR(10) PRIMARY KEY,
    whatsapp_number TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'RESIDENT',
    building VARCHAR(5),
    floor INT,
    apartment_number INT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABLE TICKETS (Réclamations & Propositions)
CREATE TABLE IF NOT EXISTS public.tickets (
    id VARCHAR(50) PRIMARY KEY,
    apartment_code VARCHAR(10) NOT NULL REFERENCES public.users(apartment_code) ON DELETE CASCADE,
    whatsapp_number TEXT NOT NULL,
    type TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'OTHER',
    description TEXT NOT NULL,
    image_uri TEXT,
    status TEXT NOT NULL DEFAULT 'SENT',
    syndic_response TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABLE BROADCAST_MESSAGES (Annonces & Rappels du Syndic)
CREATE TABLE IF NOT EXISTS public.broadcast_messages (
    id VARCHAR(50) PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'GENERAL_INFO',
    target TEXT NOT NULL DEFAULT 'ALL',
    target_apartment_code VARCHAR(10),
    sender_title TEXT NOT NULL DEFAULT 'Bureau du Syndic',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABLE FORUM_TOPICS (Sujets de discussion du Syndic)
CREATE TABLE IF NOT EXISTS public.forum_topics (
    id VARCHAR(50) PRIMARY KEY,
    author_name TEXT NOT NULL,
    author_role TEXT NOT NULL DEFAULT 'MEMBER',
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Général',
    votes_pour INT DEFAULT 0,
    votes_contre INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TABLE FORUM_COMMENTS (Commentaires des Sujets du Forum)
CREATE TABLE IF NOT EXISTS public.forum_comments (
    id VARCHAR(50) PRIMARY KEY,
    topic_id VARCHAR(50) NOT NULL REFERENCES public.forum_topics(id) ON DELETE CASCADE,
    author_name TEXT NOT NULL,
    author_role TEXT NOT NULL DEFAULT 'MEMBER',
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ACTIVATION DE LA SÉCURITÉ AU NIVEAU DES LIGNES (RLS)
-- Permet la lecture et écriture publique avec la clé anonyme (Anon Key)
-- ============================================================
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.broadcast_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Read & Write for Users" ON public.users FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read & Write for Tickets" ON public.tickets FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read & Write for Broadcasts" ON public.broadcast_messages FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read & Write for Forum Topics" ON public.forum_topics FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read & Write for Forum Comments" ON public.forum_comments FOR ALL USING (true) WITH CHECK (true);

-- ============================================================
-- DONNÉES DE DÉMONSTRATION (SEED DATA INITIAL)
-- ============================================================

-- Insertion des utilisateurs de test
INSERT INTO public.users (apartment_code, whatsapp_number, role, building, floor, apartment_number)
VALUES 
    ('A11', '+212600112233', 'RESIDENT', 'A', 1, 1),
    ('B22', '+212600445566', 'RESIDENT', 'B', 2, 2),
    ('SYNDIC', '+212661000000', 'SYNDIC', '', 0, 0)
ON CONFLICT (apartment_code) DO NOTHING;

-- Insertion d'annonces de test
INSERT INTO public.broadcast_messages (id, title, content, type, target, sender_title)
VALUES 
    ('BC-101', 'Cotisation Semestrielle 2026', 'Le bureau rappelle à l ensemble des résidents que le règlement des frais de syndic pour le 2ème semestre est ouvert.', 'COTISATION_REMINDER', 'ALL', 'Trésorier du Syndic'),
    ('BC-102', 'Entretien des Ascenseurs Bâtiment B', 'Une maintenance préventive de l ascenseur aura lieu ce vendredi entre 10h et 12h.', 'GENERAL_INFO', 'BUILDING_B', 'Bureau du Syndic')
ON CONFLICT (id) DO NOTHING;

-- Insertion de tickets de test
INSERT INTO public.tickets (id, apartment_code, whatsapp_number, type, category, description, status)
VALUES 
    ('JAC-DEMO1', 'A11', '+212600112233', 'CLAIM', 'ELEVATOR', 'Bruit anormal lors de la descente au RDC.', 'SENT'),
    ('JAC-DEMO2', 'B22', '+212600445566', 'PROPOSAL', 'SECURITY', 'Proposition d ajouter des caméras à la porte du sous-sol.', 'IN_PROGRESS')
ON CONFLICT (id) DO NOTHING;

-- Insertion de sujets du forum
INSERT INTO public.forum_topics (id, author_name, author_role, title, description, category, votes_pour, votes_contre)
VALUES 
    ('TOPIC-1', 'Karim Bennani', 'PRESIDENT', 'Aménagement du Jardin de la Résidence', 'Proposition d ajouter des bancs et de remplacer les projecteurs par des LED solaires.', 'Projets & Travaux', 8, 1)
ON CONFLICT (id) DO NOTHING;

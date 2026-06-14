export interface KeywordArastirmasiItem {
  id: string;
  keyword: string; // German keyword (e.g. "Fenster kaufen Köln")
  intent: "Transactional" | "Commercial" | "Informational" | "Local";
  difficulty: number; // 0-100
  volume: number; // Monthly search volume
  cpc: string; // German Ads cost projection e.g., "2.40 €"
  conversionPotential: "High" | "Medium" | "Low";
  recommendedCity: string; // Target region/city
}

export interface SiteAuditItem {
  id: string;
  issue: string; // Problem title (German/English standard)
  category: "Technical" | "On-Page" | "Content" | "Meta";
  severity: "Critical" | "Warning" | "Info";
  impactScore: number; // 1-10
  description: string; // German explanation of the issue
  remediation: string; // German detailed actionable fix
  urlsAffectedCount: number;
}

export interface RakipAnaliziItem {
  id: string;
  competitorDomain: string;
  estimatedTraffic: string;
  rankedKeywordsCount: number;
  perceivedStrengths: string[]; // German
  perceivedWeaknesses: string[]; // German
  elsfenOpportunity: string; // German action item
}

export interface ContentGapItem {
  id: string;
  missingTopic: string; // German topic (e.g. "Insektenschutzgitter Schiebetür")
  competitorPages: string[]; // URLs or names of competitors ranking
  targetIntent: string;
  recommendedTitle: string; // German SEO Title
  recommendedDescription: string; // German Meta Description
  recommendedKeywords: string[]; // German
  outlineGerman: string; // Brief structure outline in German
}

export interface LocalSeoItem {
  id: string;
  city: string; // "Köln", "Leverkusen", "Bergisch Gladbach" etc.
  optimizedLandingPageUrl: string; // e.g. "/fenster-koeln"
  focusKeyword: string; // German
  googleMapsTips: string[]; // German Google Business Profile actions
  localCitationsSources: { source: string; status: string }[]; // German directories
}

export interface BacklinkStratejisiItem {
  id: string;
  targetAnchor: string; // German (e.g. "Fensterbauer Leverkusen")
  sourceType: string; // "Local Directory", "Industry Blog", "German News"
  exampleGermanCatalogs: string[]; // German local directory sites
  outreachPitchSnippet: string; // German outreach email template intro
  priority: "High" | "Medium" | "Low";
}

export interface GrowthRoadmapItem {
  phase: string; // "0-3 Ay" | "3-6 Ay" | "6-12 Ay"
  focusArea: string; // German focus e.g. "Quick Wins & Site Health"
  actionPlan: string[]; // German action items
  backlinkTactics: string[]; // German
  organicTrafficTarget: string; // e.g. "+35% Growth"
}

export interface SeoIntelligenceResult {
  turkce_ozet: string;
  keyword_arastirmasi: KeywordArastirmasiItem[];
  site_audit: SiteAuditItem[];
  rakip_analizi: RakipAnaliziItem[];
  content_gap: ContentGapItem[];
  local_seo: LocalSeoItem[];
  backlink_stratejisi: BacklinkStratejisiItem[];
  growth_roadmap: GrowthRoadmapItem[];
  model_used?: string;
}

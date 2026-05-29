# Replication Team — GitHub Pages Site

A Jekyll site listing replication projects, results, and a public suggestion form.

## Quick start

### 1. Enable GitHub Pages

In your repo: **Settings → Pages → Source → Deploy from branch → `main` / `/(root)`**

Your site will be live at `https://your-org.github.io/repo-name`.

### 2. Update site settings

Edit `_data/settings.yml`:

```yaml
team_name: "Your Team Name"
tagline: "Your one-line description."
suggestion_form_url: "https://github.com/your-org/your-repo/issues/new?template=suggest_replication.md"
github_url: "https://github.com/your-org"
```

### 3. Add or update projects

All projects live in `_data/projects.yml`. Each entry looks like:

```yaml
- id: card-krueger-1994          # unique slug (used as anchor link)
  title: "Minimum wage and employment"
  citation: "Card & Krueger (1994)"
  journal: "American Economic Review"
  status: completed              # active | completed | planned
  result: replicated             # replicated | partial | failed | null
  result_pct: 94                 # 0–100, shown as a bar (null to hide)
  topic: ["Labor economics"]
  data_source: "ICPSR NJ/PA restaurant panel"
  started: "2024-03"
  completed: "2024-10"
  summary: "One or two sentences describing the replication attempt and outcome."
  repo: "https://github.com/your-org/your-repo"
  report: "https://github.com/your-org/your-repo/blob/main/report.pdf"
  prereg: "https://osf.io/your-link"
```

Set `repo`, `report`, `prereg` to `null` if not yet available.

### 4. Suggestion form

The "Submit via GitHub" button opens a pre-filled Issue using the template in `.github/ISSUE_TEMPLATE/suggest_replication.md`. No backend needed.

---

## Local development (optional)

```bash
gem install bundler jekyll
bundle init
bundle add jekyll
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

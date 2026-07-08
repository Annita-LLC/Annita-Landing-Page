'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, RotateCcw, FileCode, Check, Server } from 'lucide-react'

type TabId = 'annita_pay.ts' | 'ezri_ai.py' | 'pulse_health.go'

interface FileConfig {
  name: string
  lang: string
  code: string
  logs: string[]
  accentColor: string
}

const FILES: Record<TabId, FileConfig> = {
  'annita_pay.ts': {
    name: 'annita_pay.ts',
    lang: 'typescript',
    accentColor: 'var(--color-accent)',
    code: `import { AnnitaPay } from '@annita/pay';

const gateway = new AnnitaPay({
  region: "Africa/West",
  offlineMode: true,
  autoSync: true
});

// Handle instant checkout on offline node
gateway.on("offline_payment", (tx) => {
  console.log(\`Node: offline tx \${tx.id} buffered locally\`);
});

await gateway.syncLedger();
console.log("Success: 24 local sales synced to central gateway");`,
    logs: [
      'Establishing secure TLS handshake with Liberian Gateway...',
      '[OK] Offline storage engine active on node LBR_HQ_01.',
      'Checking offline transactions queue: 24 records pending.',
      'Syncing packet 1/4 (IDs: tx_8801 - tx_8806) ... OK',
      'Syncing packet 2/4 (IDs: tx_8807 - tx_8812) ... OK',
      'Syncing packet 3/4 (IDs: tx_8813 - tx_8818) ... OK',
      'Syncing packet 4/4 (IDs: tx_8819 - tx_8824) ... OK',
      'Verifying ledger cryptographic hashes ... Match verified.',
      '[OK] Success: 24 local sales synced to central gateway.'
    ]
  },
  'ezri_ai.py': {
    name: 'ezri_ai.py',
    lang: 'python',
    accentColor: 'var(--color-brand-secondary)',
    code: `from ezri import AIIM_Matchmaker

# Init recommender engine
engine = AIIM_Matchmaker(model="ezri-v2-liberia")

# Match verified MSMEs with local candidates
candidates = engine.find_matches(
    sector="Technology",
    experience_level="Intermediate",
    location="Monrovia"
)

for candidate in candidates[:3]:
    print(f"Matched: {candidate.name} ({candidate.score}%)")`,
    logs: [
      'Loading AIIM Model ezri-v2-liberia weights (12.4B params)...',
      'Scanning talent matrix for sector: Technology...',
      'Filter criteria applied: Monrovia, Liberia + Intermediate.',
      'Found 148 candidates. Computing neural matching scores...',
      'Matching completed in 42ms.',
      '-------------------------------------------------------',
      'Matched: Ann-Marie Benson (98.4%) - React developer',
      'Matched: Joseph Kollie (94.1%) - Node.js engineer',
      'Matched: Sarah Cooper (91.8%) - UI/UX Designer',
      '[OK] Recommended candidate notifications queued.'
    ]
  },
  'pulse_health.go': {
    name: 'pulse_health.go',
    lang: 'go',
    accentColor: 'var(--color-brand-info, #0284C7)',
    code: `package main

import (
	"context"
	"fmt"
	"github.com/annita/pulse/ledger"
)

func main() {
	client := ledger.NewClient("http://localhost:8080")
	ctx := context.Background()

	// Securely synchronize encrypted health record
	err := client.SyncRecord(ctx, "REC_9901", "clinic-node-lib")
	if err != nil {
		panic(err)
	}
	fmt.Println("Consensus achieved. Sync complete.")`,
    logs: [
      'Dialing TLS ledger client for consensus protocol...',
      'Verifying node signature: pulse-clinic-node-lib (active)...',
      'Initiating double-encryption handshake (AES-256-GCM + Kyber)...',
      'Transmitting secure health payload REC_9901 (Size: 14.8KB)...',
      'Waiting for multi-sig validation from validator pool...',
      'Consensus achieved on block height #48,102.',
      '[OK] Consensus achieved. Sync complete.'
    ]
  }
}

export default function LiveCodingTerminal() {
  const [activeTab, setActiveTab] = useState<TabId>('annita_pay.ts')
  const [typedCode, setTypedCode] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [consoleLogs, setConsoleLogs] = useState<string[]>([])
  
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const codeLinesRef = useRef<string[]>([])
  const lineIndexRef = useRef(0)

  // Trigger auto-typing whenever tab changes
  useEffect(() => {
    // Reset state
    if (typingTimerRef.current) clearInterval(typingTimerRef.current)
    setTypedCode('')
    setIsTyping(true)
    setIsRunning(false)
    setIsFinished(false)
    setConsoleLogs([])

    const file = FILES[activeTab]
    codeLinesRef.current = file.code.split('\n')
    lineIndexRef.current = 0

    // Typing speed simulator
    typingTimerRef.current = setInterval(() => {
      if (lineIndexRef.current < codeLinesRef.current.length) {
        setTypedCode(prev => {
          const nextLine = codeLinesRef.current[lineIndexRef.current]
          lineIndexRef.current += 1
          return prev ? prev + '\n' + nextLine : nextLine
        })
      } else {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current)
        setIsTyping(false)
      }
    }, 150) // Fast typing simulation

    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current)
    }
  }, [activeTab])

  // Run script simulator
  const handleRun = () => {
    if (isTyping || isRunning || isFinished) return
    
    setIsRunning(true)
    setConsoleLogs([])
    
    const logsToStream = FILES[activeTab].logs
    let currentLogIndex = 0

    const logStreamer = setInterval(() => {
      if (currentLogIndex < logsToStream.length) {
        setConsoleLogs(prev => [...prev, logsToStream[currentLogIndex]])
        currentLogIndex++
      } else {
        clearInterval(logStreamer)
        setIsRunning(false)
        setIsFinished(true)
      }
    }, 450)
  }

  // Reset script action
  const handleReset = () => {
    // Force re-trigger typing effect
    const temp = activeTab
    setActiveTab(temp === 'annita_pay.ts' ? 'ezri_ai.py' : 'annita_pay.ts')
    setTimeout(() => setActiveTab(temp), 50)
  }

  // Basic syntax highlighter helper
  const highlightCode = (line: string) => {
    let highlighted = line
      .replace(/(import|from|const|new|await|typeof|console|log|package|func|main|struct|return|def|for|in|print|class)/g, '<span class="text-[var(--color-accent)] font-bold">$1</span>')
      .replace(/(AnnitaPay|ezriAI|AIIM_Matchmaker|pulse|ledger|NewClient|SyncRecord)/g, '<span class="text-[var(--color-brand-secondary)] font-bold">$1</span>')
      .replace(/("[^"]*")/g, '<span class="text-emerald-400">$1</span>')
      .replace(/(\/\/.*|#.*)/g, '<span class="text-[var(--color-text-muted)] font-light italic">$1</span>')
    return highlighted
  }

  return (
    <div className="w-full bg-[var(--color-surface-base)]/95 border border-[var(--color-border-card)]/80 rounded-xl overflow-hidden shadow-2xl relative flex flex-col font-mono text-xs text-left h-[420px] tech-glow-card transition-all duration-300">
      {/* OS Bar & Tabs */}
      <div className="bg-[var(--color-surface-card)] border-b border-[var(--color-border-card)] flex flex-col sm:flex-row sm:items-center justify-between px-3 py-1.5 gap-2 select-none">
        {/* Left: Window Circles & Files */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-1.5 mr-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          
          {/* File Tabs */}
          <div className="flex items-center gap-1 shrink-0">
            {(Object.keys(FILES) as TabId[]).map((tabId) => {
              const file = FILES[tabId]
              const isSelected = activeTab === tabId
              return (
                <button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors text-[10px] ${
                    isSelected 
                      ? 'bg-[var(--color-surface-base)] text-[var(--color-text-primary)] border border-[var(--color-border-card)]' 
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border-card)]/30'
                  }`}
                >
                  <FileCode className="w-3 h-3" style={{ color: file.accentColor }} />
                  <span>{file.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: Operations status badge */}
        <div className="flex items-center justify-between sm:justify-end gap-2 text-[10px] shrink-0 border-t sm:border-t-0 border-[var(--color-border-card)]/50 pt-1 sm:pt-0">
          <span className="text-[var(--color-text-secondary)] flex items-center gap-1">
            <Server className="w-3 h-3" />
            LBR_NODE_01
          </span>
          <span className={`px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[8px] ${
            isTyping 
              ? 'text-[var(--color-brand-secondary)] bg-[var(--color-brand-secondary)]/10' 
              : isRunning 
                ? 'text-[var(--color-accent)] bg-[var(--color-accent-soft)] animate-pulse'
                : isFinished 
                  ? 'text-emerald-400 bg-emerald-400/10'
                  : 'text-white bg-slate-800'
          }`}>
            {isTyping ? 'TYPING' : isRunning ? 'RUNNING' : isFinished ? 'READY' : 'STANDBY'}
          </span>
        </div>
      </div>

      {/* Editor Panel */}
      <div className="p-4 flex-1 overflow-y-auto min-h-0 bg-[var(--color-surface-base)] flex flex-col justify-start select-text selection:bg-[var(--color-accent)]/20">
        <pre className="text-[10px] md:text-[11px] leading-relaxed text-[var(--color-text-primary)] overflow-x-auto whitespace-pre-wrap">
          <code className="text-[var(--color-text-secondary)]">
            {typedCode.split('\n').map((line, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-4 text-right text-[var(--color-text-muted)] select-none text-[9px]">{i + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: highlightCode(line) }} />
              </div>
            ))}
            {isTyping && (
              <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-[var(--color-accent)] animate-pulse" />
            )}
          </code>
        </pre>
      </div>

      {/* Console Panel */}
      <div className="h-[140px] bg-[var(--color-surface-card)] border-t border-[var(--color-border-card)] p-3 flex flex-col font-mono text-[9px] shrink-0">
        <div className="text-[var(--color-text-secondary)] font-bold uppercase tracking-wider border-b border-[var(--color-border-card)] pb-1.5 mb-1.5 flex items-center justify-between select-none">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            Output Console
          </span>
          
          {/* Terminal Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleRun}
              disabled={isTyping || isRunning || isFinished}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded transition-all text-[8px] font-bold uppercase tracking-wider ${
                isTyping || isRunning || isFinished
                  ? 'text-[var(--color-text-muted)] bg-[var(--color-border-card)]/10 cursor-not-allowed'
                  : 'text-[var(--color-accent-foreground)] bg-[var(--color-accent)] hover:brightness-110'
              }`}
            >
              {isFinished ? <Check className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
              <span>{isFinished ? 'Success' : isRunning ? 'Running' : 'Run Script'}</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-[var(--color-border-card)] hover:bg-[var(--color-border-card)]/85 text-[var(--color-text-secondary)] hover:text-white transition-all text-[8px] font-bold uppercase tracking-wider"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Console Logs Stream */}
        <div className="flex-1 overflow-y-auto space-y-1.5 select-text selection:bg-[var(--color-accent)]/20 pr-1">
          {consoleLogs.map((log, index) => {
            const isOk = log.startsWith('[OK]')
            const isDivider = log.startsWith('---')
            let textClass = 'text-[var(--color-text-secondary)]'
            if (isOk) textClass = 'text-[var(--color-accent)] font-semibold'
            else if (log.includes('Matched:')) textClass = 'text-amber-300'
            else if (log.includes('cryptographic') || log.includes('Consensus')) textClass = 'text-cyan-400 font-semibold'
            
            return (
              <div key={index} className={`leading-relaxed whitespace-pre-wrap ${textClass} ${isDivider ? 'opacity-30' : ''}`}>
                {log}
              </div>
            )
          })}
          
          {isRunning && (
            <div className="text-[var(--color-accent)] font-bold animate-pulse flex items-center gap-1">
              <span>Executing script payload</span>
              <span className="animate-ping text-[7px]">...</span>
            </div>
          )}
          
          {!isRunning && !isFinished && !isTyping && consoleLogs.length === 0 && (
            <div className="text-[var(--color-text-muted)] italic select-none">Ready. Click 'Run Script' to execute compiled code on LBR_NODE_01.</div>
          )}
        </div>
      </div>
    </div>
  )
}

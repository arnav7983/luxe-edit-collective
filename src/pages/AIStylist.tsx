import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";

const AIStylist = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your personal AI fashion stylist. I'm here to help you discover pieces that align with your style and lifestyle. What brings you here today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Mock AI response (will be connected to Lovable AI later)
    setTimeout(() => {
      const assistantMessage = {
        role: "assistant",
        content:
          "Based on your style preferences, I recommend exploring our collection of minimalist pieces. The structured leather tote and cashmere coat would be excellent additions to create a refined, timeless wardrobe. Would you like me to suggest specific outfit combinations?",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium tracking-wide">AI-POWERED STYLING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Your Personal Stylist</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get personalized style recommendations powered by artificial intelligence. Share your
              preferences, and I'll help you curate the perfect luxury wardrobe.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="luxury-card bg-card border border-border overflow-hidden fade-in">
            {/* Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-6">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-6">
              <div className="flex gap-4">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Describe your style preferences, occasion, or ask for recommendations..."
                  className="min-h-[80px] resize-none"
                />
                <Button
                  onClick={handleSend}
                  size="lg"
                  className="luxury-button self-end"
                  disabled={!input.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Press Enter to send, Shift + Enter for new line
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Personalized",
                description: "Recommendations tailored to your unique style and preferences",
              },
              {
                title: "Instant",
                description: "Get expert styling advice in real-time, whenever you need it",
              },
              {
                title: "Curated",
                description: "Access our entire luxury collection with intelligent suggestions",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center space-y-2 p-6 luxury-card bg-secondary/50 fade-in"
              >
                <h3 className="font-serif text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIStylist;

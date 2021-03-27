
async function startGame() {
    document.getElementById("btn1").remove();
    var start = Date.now();
    var time_spent;
    //var word = "Hello my name is Nick";
    var word = generatePhrase();
    var numWords = word.length;
    document.getElementById("word").innerHTML = "Phrase to type: ";
    for (var i = 0; i < numWords; i++){
        document.getElementById("word").innerHTML = document.getElementById("word").innerHTML+" "+word[i];
    }
    
    console.log(word);
    var newword;
    var pch;
    var correct = 0;
    var wrong = 0;
    var percent;
    var percent2;
    var wpm;
    var seconds = 0;
    var inputArea = document.createElement("input");
    inputArea.setAttribute("id", "wordenter");
    document.getElementById("textbox").appendChild(inputArea);
    document.getElementById("wordenter").focus();
    //newword = window.prompt("Enter Phrase:");
    await waitingKeypress();
    var newword = document.getElementById("wordenter").value;
    
    //var newword = window.open("Enter Word: ");
    var stop = Date.now();
    console.log(word);
//var arr = word.split(',');

    var time = stop - start;
    console.log(time);
time = time / 1000;
var arr2 = newword.split(' ');
console.log("Before Loop");

for (let i = 0; i < numWords; i++) {
    
    var n = word[i].localeCompare(arr2[i]);
    if (n == 0) {
        correct++;
        
    }
    else {
        wrong++;
    }
}
percent = correct / (correct + wrong);
percent2 = percent * 100;
    wpm = (correct + wrong) / (time / 60);
    printResults(wpm, correct,wrong, percent2);
    console.log(newword);
    console.log(arr);
    console.log(numWords);
    console.log(correct);
    console.log(wrong);
    console.log(time);
    console.log(wpm);
    console.log(percent2);
    
    //inputArea.remove();
    return 0;
    
}
function printResults(wpm, correct, wrong, percent2) {
    wpm = Math.round(wpm * 100) / 100;
    document.getElementById("wpm").innerHTML = "Speed: "+ wpm+" wpm";
    document.getElementById("correct").innerHTML = "Words Correct: " + correct;
    document.getElementById("incorrect").innerHTML = "Words Incorrect: " + wrong;
    document.getElementById("accuracy").innerHTML = "Accuracy: "  + percent2+"%";
    
}
function resetGame() {
    window.location.reload();
}
function generatePhrase() {
var words = `resistance
discovery
tear
exposure
pose
stream
sale
trust
benefit
pot
grand
mine
hello
coalition
tale
knife
resolve
racial
phase
present
joke
coat
Mexican
symptom
contact
manufacturer
philosophy
potato
interview
foundation
quote
online
pass
negotiation
good
urge
occasion
dust
breathe
elect
investigator
jacket
glad
ordinary
reduction
rarely
shift
pack
suicide
numerous
touch
substance
discipline
elsewhere
iron
practical
moreover
passion
volunteer
implement
essentially
gene
enforcement
vs
sauce
independence
marketing
priest
amazing
intense
advance
employer
shock
inspire
adjust
retire
sure
visible
kiss
illness
cap
habit
competitive
juice
congressional
involvement
dominate
previously
whenever
transfer
analyze
another
attach
for
Indian
disaster
parking
prospect
boss
complaint
championship
coach
exercise
fundamental
severe
enhance
mystery
impose
poverty
other
entry
fat
spending
king
evaluate
symbol
still
trade
maker
mood
accomplish
emphasis
illustrate
boot
monitor
Asian
entertainment
bean
evaluation
creature
commander
digital
arrangement
concentrate
total
usual
anger
psychological
heavily
peak
approximately
increasing
disorder
missile
equally
vary
wire
round
distribution
transportation
holy
ring
twin
command
commission
interpretation
breakfast
stop
strongly
engineering
luck
so-called
constant
race
clinic
veteran
smell
tablespoon
capable
nervous
tourist
light
toss
crucial
bury
pray
tomato
exception
butter
deficit
bathroom
objective
block
electronic
ally
journey
reputation
mixture
surely
tower
smoke
confront
pure
glance
dimension
toy
prisoner
fellow
smooth
nearby
peer
designer
personnel
shape
educator
relative
immigration
belt
teaspoon
birthday
implication
perfectly
coast
supporter
accompany
silver
teenager
recognition
retirement
flag
recovery
whisper
watch
gentleman
corn
moon
inner
junior
rather
throat
salary
swing
observer
due
straight
publication
pretty
crop
dig
strike
permanent
plant
phenomenon
anxiety
unlike
wet
literally
resist
convention
embrace
supply
assist
exhibition
construct
viewer
pan
consultant
soon
line
administrator
date
occasionally
mayor
consideration
CEO
secure
pink
smoke
estimate
buck
historic
poem
grandmother
bind
fifth
constantly
enterprise
favor
testing
stomach
apparent
weigh
install
sensitive
suggestion
mail
recipe
reasonable
preparation
wooden
elementary
concert
aggressive
false
intention
channel
extreme
tube
drawing
protein
quit
absence
roll
Latin
rapidly
jail
comment
diversity
honest
Palestinian
pace
employment
speaker
impression
essay
respondent
giant
cake
historian
negotiate
restore
substantial
pop
particular
specialist
origin
approval
mine
quietly
advise
conventional
drop
count
depth
wealth
disability
shell
general
criticize
fast
professional
effectively
biological
pack
onion
deputy
flat
brand
assure
mad
award
criteria
dealer
via
alternative
utility
precisely
arise
armed
nevertheless
highway
clinical
routine
schedule
wage
normally
phrase
ingredient
stake
Muslim
dream
fiber
activist
Islamic
snap
terrorism
refugee
incorporate
hip
ultimate
switch
corporation
valuable
assumption
gear
graduate
barrier
minor
provision
killer
assign
gang
developing
classic
chemical
wave
label
teen
index
vacation
advocate
draft
extraordinary
heaven
rough
yell
pregnant
distant
drama
satellite
personally
wonder
clock
chocolate
Italian
Canadian
ceiling
sweep
advertising
universal
spin
house
button
bell
rank
darkness
ahead
clothing
super
yield
fence
portrait
paint
survival
roughly
lawsuit
bottom
testimony
bunch
beat
wind
found
burden
react
chamber
furniture
cooperation
string
ceremony
communicate
taste
cheek
lost
profile
mechanism
disagree
like
penalty
match
ie
advance
resort
destruction
bear
unlikely
tissue
constitutional
pant
stranger
infection
cabinet
broken
apple
electric
proceed
track
bet
literary
virus
stupid
dispute
fortune
strategic
assistant
overcome
remarkable
occupy
statistics
shopping
cousin
encounter
wipe
initially
blind
white
port
honor
electricity
genetic
adviser
pay
spokesman
retain
latter
incentive
slave
chemical
translate
accurate
whereas
terror
though
expansion
elite
Olympic
dirt
odd
rice
bullet
tight
Bible
chart
solar
decline
conservative
process
square
stick
concentration
complicated
gently
champion
scenario
telescope
reflection
revolution
strip
interpret
friendly
tournament
fiction
detect
balance
likely
tremendous
lifetime
recommendation
flow
senator
market
hunting
salad
guarantee
innocent
boundary
pause
remote
satisfaction
journal
bench
lover
raw
awareness
surprising
withdraw
general
deck
similarly
newly
pole
testify
mode
dialogue
imply
naturally
mutual
founder
top
advanced
pride
dismiss
aircraft
delivery
mainly
bake
freeze
platform
finance
sink
attractive
respect
diverse
relevant
ideal
joy
worth
regularly
working
singer
evolve
shooting
partly
unknown
assistant
offense
counter
DNA
smell
potentially
transfer
thirty
justify
protest
crash
craft
treaty
terrorist
insight
possess
politically
tap
lie
extensive
episode
double
swim
tire
fault
loose
free
shortly
originally
considerable
prior
intellectual
mix
assault
relax
stair
adventure
external
proof
confident
headquarters
sudden
dirty
violation
tongue
license
hold
shelter
rub
controversy
entrance
favorite
practice
properly
fade
defensive
tragedy
net
characterize
funeral
profession
alter
spot
constitute
establishment
squeeze
imagination
target
mask
convert
comprehensive
prominent
presentation
regardless
easy
load
stable
introduction
appeal
pretend
not
elderly
representation
deer
split
violate
partnership
pollution
emission
steady
vital
neither
fate
earnings
oven
distinction
segment
nowhere
poet
mere
exciting
variation
comfort
radical
stress
adapt
Irish
honey
correspondent
pale
musician
significance
load
round
vessel
storage
flee
mm-hmm
leather
distribute
evolution
ill
tribe
shelf
can
grandfather
lawn
buyer
dining
wisdom
council
vulnerable
instance
garlic
capability
poetry
celebrity
gradually
stability
doubt
fantasy
scared
guide
plot
framework
gesture
depending
ongoing
psychology
since
counselor
witness
chapter
fellow
divorce
owe
pipe
athletic
slight
math
shade
tail
sustain
mount
obligation
angle
palm
differ
custom
store
economist
fifteen
soup
celebration
efficient
damage
composition
satisfy
pile
briefly
carbon
closer
consume
scheme
crack
frequency
tobacco
survivor
besides
in
psychologist
wealthy
galaxy
given
fund
ski
limitation
OK
trace
appointment
preference
meter
explosion
arrest
publicly
incredible
fighter
rapid
admission
hunter
educate
painful
friendship
aide
infant
calculate
fifty
rid
porch
tendency
uniform
formation
scholarship
reservation
efficiency
waste
qualify
mall
derive
scandal
PC
helpful
impress
heel
resemble
privacy
fabric
surprise
contest
proportion
guideline
rifle
maintenance
conviction
trick
organic
tent
examination
publisher
strengthen
French
proposed
myth
sophisticated
cow
etc
standing
asleep
tennis
nerve
barrel
bombing
membership
ratio
menu
purchase
controversial
desperate
rate
lifestyle
humor
loud
glove
suspect
sufficient
narrative
photographer
helicopter
Catholic
modest
provider
delay
agricultural
explode
stroke
scope
punishment
handful
badly
horizon
curious
downtown
girlfriend
prompt
request
cholesterol
absorb
adjustment
taxpayer
eager
principal
detailed
motivation
assignment
restriction
across
Palestinian
laboratory
workshop
differently
auto
romantic
cotton
motor
sue
flavor
overlook
float
undergo
sequence
demonstration
jet
orange
consumption
assert
blade
temporary
medication
print
cabin
bite
relative
edition
valley
yours
pitch
pine
brilliant
versus
manufacturing
risk
Christian
complex
absolute
chef
discrimination
offensive
German
suit
boom
register
appoint
heritage
God
terrorist
dominant
successfully
shit
lemon
hungry
sense
dry
wander
submit
economics
naked
anticipate
nut
legacy
extension
shrug
fly
battery
arrival
legitimate
orientation
inflation
cope
flame
cluster
host
wound
dependent
shower
institutional
depict
operating
flesh
garage
operator
instructor
collapse
borrow
furthermore
comedy
mortgage
sanction
civilian
twelve
weekly
habitat
grain
brush
consciousness
devote
crack
measurement
province
ease
seize
ethics
nomination
permission
wise
actress
summit
acid
odds
gifted
frustration
medium
function
physically
grant
distinguish
shore
repeatedly
lung
firm
running
correct
distinct
artistic
discourse
basket
ah
fighting
impressive
competitor
ugly
worried
portray
powder
ghost
persuade
moderate
subsequent
continued
cookie
carrier
cooking
frequent
ban
swing
orange
awful
admire
pet
miracle
exceed
rhythm
widespread
killing
lovely
sin
charity
script
tactic
identification
transformation
everyday
headline
crash
venture
invasion
military
nonetheless
adequate
piano
grocery
intensity
exhibit
high
blanket
margin
principal
quarterback
mouse
rope
concrete
prescription
African-American
chase
document
brick
recruit
patch
consensus
horror
recording
changing
painter
colonial
pie
sake
gaze
courage
pregnancy
swear
defeat
clue
reinforce
win
confusion
slice
occupation
dear
coal
sacred
criminal
formula
cognitive
collective
exact
uncle
square
captain
sigh
attribute
dare
okay
homeless
cool
gallery
soccer
defendant
tunnel
fitness
lap
grave
toe
container
virtue
abroad
architect
dramatically
makeup
inquiry
rose
surprisingly
highlight
decrease
indication
rail
anniversary
couch
alliance
hypothesis
boyfriend
compose
peer
mess
rank
legend
regulate
adolescent
shine
norm
upset
remark
resign
reward
gentle
related
organ
lightly
concerning
invent
laughter
fit
northwest
counseling
tight
receiver
ritual
insect
interrupt
salmon
favor
trading
concern
magic
superior
combat
stem
surgeon
acceptable
physics
rape
counsel
brush
jeans
hunt
continuous
log
echo
pill
excited
sculpture
compound
integrate
flour
bitter
bare
slope
rent
presidency
serving
subtle
greatly
bishop
drinking
delay
cry
acceptance
collapse
shop
pump
candy
evil
final
finance
pleased
medal
beg
sponsor
ethical
secondary
slam
export
experimental
melt
midnight
net
curve
integrity
entitle
evident
logic
essence
park
exclude
harsh
closet
suburban
greet
favor
interior
corridor
murder
retail
pitcher
march
snake
pitch
excuse
cross
weakness
pig
cold
classical
estimated
T-shirt
online
unemployment
civilization
fold
patient
pop
daily
reverse
missing
correlation
humanity
flash
developer
reliable
excitement
beef
Islam
Roman
stretch
architecture
occasional
administrative
elbow
deadly
Muslim
Hispanic
allegation
tip
confuse
airplane
monthly
duck
dose
Korean
plead
initiate
lecture
van
sixth
bay
mainstream
suburb
sandwich
unlike
trunk
rumor
implementation
swallow
motivate
render
longtime
trap
restrict
cloth
seemingly
legislative
effectiveness
enforce
lens
reach
inspector
lend
plain
fraud
companion
contend
nail
array
strict
assemble
frankly
rat
burst
hallway
cave
inevitable
southwest
monster
speed
protest
unexpected
obstacle
facilitate
encounter
rip
herb
overwhelming
integration
crystal
recession
wish
top
written
motive
label
flood
pen
ownership
nightmare
notice
inspection
supervisor
consult
arena
laugh
diagnosis
possession
forgive
warm
consistently
basement
project
drift
drain
last
prosecution
maximum
announcement
warrior
prediction
bacteria
questionnaire
mud
infrastructure
hurry
privilege
temple
medium
outdoor
suck
and/or
broadcast
re
leap
random
past
wrist
curtain
monitor
pond
domain
guilt
cattle
subject
walking
playoff
minimum
fiscal
skirt
dump
hence
database
uncomfortable
aim
execute
limb
ideology
average
welcome
tune
continuing
hay
railroad
endure
radiation
horn
chronic
peaceful
innovation
strain
guitar
replacement
behave
administer
simultaneously
dancer
amendment
guard
pad
transmission
await
retired
trigger
spill
grateful
grace
virtual
response
colony
adoption
slide
indigenous
closed
convict
civilian
towel
modify
particle
award
glance
prize
landing
conduct
blue
boost
bat
alarm
festival
grip
weird
undermine
freshman
sweat
outer
European
drunk
survey
research
separation
traditionally
stuff
govern
southeast
intelligent
wherever
ballot
rhetoric
convinced
driving
vitamin
enthusiasm
accommodate
praise
injure
wilderness
nearby
endless
mandate
pause
excuse
respectively
uncertainty
chaos
short
mechanical
canvas
forty
matter
lobby
profound
format
trait
currency
turkey
reserve
beam
abuse
astronomer
corruption
contractor
apologize
doctrine
genuine
thumb
unity
compromise
horrible
behavioral
exclusive
scatter
commonly
convey
rush
twist
complexity
fork
disk
relieve
suspicion
lock
finish
health-care
health-care
health-care
health-care
residence
shame
meaningful
sidewalk
Olympics
technological
signature
pleasant
wow
suspend
rebel
frozen
desire
spouse
fluid
pension
resume
theoretical
sodium
blow
promotion
delicate
forehead
rebuild
bounce
electrical
hook
detective
traveler
click
compensation
signal
exit
attraction
dedicate
altogether
pickup
carve
needle
belly
ship
scare
portfolio
shuttle
invisible
timing
engagement
ankle
transaction
rescue
counterpart
historically
firmly
mild
rider
doll
noon
exhibit
amid
identical
precise
anxious
structural
residential
loud
diagnose
carbohydrate
liberty
poster
theology
nonprofit
crawl
oxygen
handsome
magic
sum
provided
businessman
promising
conscious
determination
donor
hers
pastor
jazz
opera
Japanese
bite
frame
evil
acquisition
pit
hug
wildlife
punish
giant
primary
equity
wrong
doorway
departure
elevator
teenage
guidance
happiness
statue
pursuit
repair
decent
gym
oral
clerk
Israeli
envelope
reporting
destination
fist
endorse
exploration
generous
bath
rescue
thereby
overall
indicator
sunlight
feedback
spectrum
purple
laser
bold
reluctant
starting
expertise
practically
program
picture
tune
eating
age
volunteer
hint
sharply
parade
advocate
realm
ban
strip
cancel
blend
therapist
slice
peel
pizza
recipient
hesitate
flip
accounting
debate
bias
huh
metaphor
candle
handle
worry
judicial
entity
suffering
full-time
feel
lamp
garbage
servant
addition
regulatory
diplomatic
elegant
inside
reception
vanish
automatically
chin
trail
necessity
confess
racism
starter
interior
banking
casual
gravity
enroll
diminish
prevention
Arab
value
minimize
chop
performer
intent
isolate
pump
inventory
productive
assembly
civic
silk
magnitude
steep
hostage
collector
popularity
kiss
alien
dynamic
scary
equation
angel
switch
offering
rage
photography
repair
toilet
disappointed
precious
prohibit
representative
content
realistic
Russian
hidden
command
tender
wake
gathering
outstanding
stumble
lonely
automobile
artificial
dawn
abstract
descend
silly
hook
tide
shared
hopefully
readily
cooperate
revolutionary
romance
hardware
pillow
kit
cook
spread
continent
seal
circuit
sink
ruling
shortage
annually
lately
trap
scan
fool
deadline
rear
processing
ranch
coastal
undertake
softly
reserve
burning
verbal
tribal
ridiculous
automatic
diamond
credibility
import
sexually
spring
way
divine
sentiment
cart
oversee
stem
o'clock
elder
pro
inspiration
Dutch
quantity
trailer
mate
Greek
genius
monument
bid
quest
sacrifice
invitation
accuracy
juror
officially
broker
treasure
loyalty
credit
shock
talented
gasoline
stiff
output
nominee
extended
please
diabetes
slap
toxic
alleged
jaw
grief
mysterious
rocket
donate
inmate
tackle
dynamics
bow
ours
senior
dignity
carpet
parental
bubble
heat
buddy
barn
sword
flash
seventh
glory
tightly
protective
tuck
drum
faint
post
queen
dilemma
input
specialize
northeast
shallow
liability
sail
merchant
stadium
improved
bloody
defeat
associated
withdrawal
refrigerator
nest
near
thoroughly
lane
ancestor
condemn
steam
accent
escape
optimistic
unite
cage
equip
shrimp
homeland
exchange
rack
costume
wolf
courtroom
statute
cartoon
besides
productivity
grin
symbolic
seal
bug
bless
aunt
agriculture
rock
hostile
root
conceive
combined
instantly
bankruptcy
vaccine
bonus
collaboration
mixed
opposed
orbit
grasp
patience
spite
tropical
voting
patrol
willingness
position
revelation
rent
calm
jewelry
Cuban
haul
concede
trace
wagon
afterward
spectacular
ruin
sheer
prior
immune
reliability
ass
alongside
bush
exotic
fascinating
secure
clip
thigh
bull
drawer
regard
sheep
discourage
coordinator
ideological
runner
secular
intimate
empire
cab
divorce
exam
documentary
neutral
biology
flexible
progressive
web
conspiracy
catch
casualty
republic
execution
terrific
whale
functional
star
draft
instinct
teammate
aluminum
whoever
ministry
verdict
instruct
skull
self-esteem
ease
cooperative
manipulate
bee
practitioner
loop
edit
whip
puzzle
mushroom
subsidy
boil
tragic
mathematics
mechanic
jar
respect
earthquake
pork
creativity
safely
underlying
dessert
sympathy
fisherman
incredibly
isolation
sock
near
jump
eleven
sexy
entrepreneur
syndrome
bureau
seat
workplace
ambition
touchdown
utilize
breeze
costly
ambitious
Christianity
presumably
influential
translation
uncertain
dissolve
object
statistical
gut
metropolitan
rolling
aesthetic
spell
insert
booth
helmet
waist
expected
lion
accomplishment
royal
panic
cast
crush
actively
cliff
minimal
cord
fortunately
cocaine
illusion
anonymous
tolerate
appreciation
commissioner
harm
flexibility
instructional
scramble
casino
tumor
decorate
sort
charge
pulse
equivalent
fixed
experienced
donation
diary
sibling
irony
spoon
midst
alley
upset
interact
soap
cute
rival
short-term
punch
pin
hockey
passing
persist
supplier
known
momentum
purse
shed
liquid
icon
elephant
consequently
legislature
associate
franchise
correctly
mentally
foster
bicycle
encouraging
cheat
access
heal
fever
filter
rabbit
coin
exploit
accessible
organism
sensation
partially
stay
upstairs
dried
minimum
pro
conservation
shove
backyard
charter
stove
consent
comprise
reminder
alike
placement
dough
grandchild
dam
reportedly
well-known
surrounding
ecological
outfit
unprecedented
columnist
workout
preliminary
patent
shy
quote
trash
disabled
gross
damn
hormone
texture
counter
pencil
associate
frontier
spray
bet
disclose
custody
banker
beast
interfere
oak
case
eighth
notebook
outline
gaze
attendance
speculation
uncover
behalf
innovative
shark
reward
mill
installation
stimulate
tag
vertical
swimming
fleet
catalog
outsider
sacrifice
desperately
stance
compel
sensitivity
someday
instant
debut
proclaim
worldwide
hike
required
confrontation
colorful
ideal
constitution
trainer
Thanksgiving
scent
stack
eyebrow
sack
cease
inherit
tray
pioneer
organizational
textbook
uh
nasty
shrink
model
emerging
dot
wheat
fierce
envision
rational
kingdom
aisle
weaken
protocol
exclusively
vocal
marketplace
openly
unfair
terrain
deploy
risky
pasta
genre
distract
merit
planner
depressed
chunk
closest
discount
no
ladder
jungle
migration
breathing
invade
hurricane
retailer
classify
wound
coup
aid
ambassador
density
supportive
curiosity
skip
aggression
stimulus
journalism
robot
flood
dip
likewise
informal
Persian
feather
sphere
tighten
boast
pat
perceived
sole
publicity
major
unfold
joke
well-being
validity
ecosystem
strictly
partial
collar
weed
compliance
streak
supposedly
added
builder
glimpse
premise
specialty
deem
artifact
sneak
monkey
mentor
two-thirds
listener
lightning
legally
sleeve
disappointment
disturb
rib
excessive
high-tech
debris
pile
rod
logical
liberal
ash
socially
parish
slavery
blank
commodity
cure
mineral
hunger
dying
developmental
faster
spare
halfway
cure
equality
cemetery
harassment
deliberately
fame
regret
striking
likelihood
carrot
atop
toll
rim
embarrassed
fucking
cling
isolated
blink
suspicious
wheelchair
squad
eligible
processor
plunge
this
sponsor
grin
color
demographic
rain
chill
refuge
steer
legislator
rally
programming
cheer
outlet
intact
vendor
thrive
peanut
chew
elaborate
intellectual
conception
auction
steak
comply
triumph
shareholder
comparable
transport
conscience
calculation
considerably
interval
scratch
awake
jurisdiction
inevitably
feminist
constraint
emotionally
expedition
allegedly
compromise
strain
similarity
butt
lid
dumb
bulk
sprinkle
mortality
philosophical
conversion
patron
municipal
any
liver
harmony
solely
tolerance
instant
goat
arm
blessing
banana
running
palace
formerly
peasant
neat
grandparent
lawmaker
supermarket
cruise
mobile
plain
part
calendar
widow
deposit
beard
brake
downtown
screening
impulse
forbid
fur
brutal
predator
poke
opt
voluntary
trouble
valid
forum
dancing
happily
soar
removal
autonomy
enact
round
thread
light
landmark
unhappy
offender
coming
privately
fraction
distinctive
tourism
threshold
calm
routinely
suite
remark
regulator
straw
theological
apart
exhaust
globe
fragile
objection
chemistry
old-fashioned
crowded
circle
blast
prevail
overnight
denial
rental
fantastic
fragment
level
screw
warmth
undergraduate
liquid
headache
policeman
yield
projection
battle
suitable
mention
graduation
drill
cruel
mansion
regard
grape
authorize
cottage
driveway
charm
sexuality
loyal
clay
pound
balloon
invention
ego
fare
homework
disc
sofa
guarantee
availability
radar
frown
regain
leave
permit
sweater
rehabilitation
rubber
retreat
molecule
freely
favorable
steadily
veteran
integrated
ha
youngster
broadcast
premium
accountability
overwhelm
one-third
contemplate
update
spark
ironically
fatigue
beyond
speculate
marker
low
preach
bucket
bomb
blond
confession
provoke
marble
substantially
twist
defender
fish
explicit
transport
disturbing
surveillance
magnetic
technician
mutter
devastating
depart
arrow
trauma
neighboring
soak
ribbon
meantime
transmit
screen
harvest
consecutive
republican
coordinate
worldwide
within
spy
slot
riot
nutrient
citizenship
severely
sovereignty
ridge
brave
lighting
specify
contributor
frustrate
crowd
articulate
importantly
transit
dense
seminar
electronics
sunny
shorts
swell
accusation
soften
photograph
straighten
terribly
cue
sudden
bride
biography
hazard
compelling
seldom
tile
economically
honestly
troubled
bow
twentieth
balanced
foreigner
launch
convenience
delight
weave
timber
till
accurately
plea
bulb
copy
flying
sustainable
devil
bolt
cargo
spine
seller
skilled
managing
public
marine
dock
organized
fog
diplomat
boring
sometime
summary
missionary
epidemic
fatal
trim
warehouse
accelerate
butterfly
bronze
drown
inherent
praise
nationwide
spit
harvest
kneel
vacuum
selected
dictate
stereotype
sensor
laundry
manual
pistol
naval
immigrant
plaintiff`;
words = words.split('\n');

var prompt = new Array(10);

for (let i = 0; i < 10; i++){
    //generates a random number between 0 and 2757
    let num = Math.floor(Math.random() * 2757);
    prompt [i] = words[num];
    }
    console.log(prompt);
    return prompt;

}

function waitingKeypress() {
    return new Promise((resolve) => {
      document.addEventListener('keydown', onKeyHandler);
      function onKeyHandler(e) {
        if (e.keyCode === 13) {
          document.removeEventListener('keydown', onKeyHandler);
          resolve();
        }
      }
    });
  }
    


